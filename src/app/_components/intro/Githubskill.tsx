import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// SWR fetcher function using Axios
const fetcher = (url: string) => axios.get(url).then(res => res.data);

const GithubSkill = () => {
  const [languageData, setLanguageData] = useState<{ [key: string]: number }>({});
  const [chartData, setChartData] = useState<any>(null);

  const GITHUB_USERNAME = 'Azman-Ahmed'; // Replace with your GitHub username

  // Use SWR to fetch the list of repositories
  const { data: repos, error: reposError } = useSWR(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
    fetcher
  );

  useEffect(() => {
    if (repos) {
      const fetchLanguages = async () => {
        let aggregatedLanguages: { [key: string]: number } = {};

        // Fetch languages for each repository using SWR
        await Promise.all(repos.map(async (repo: any) => {
          const { data: languages } = await axios.get(repo.languages_url);
          for (const [language, bytes] of Object.entries(languages)) {
            aggregatedLanguages[language] = (aggregatedLanguages[language] || 0) + (bytes as number);
          }
        }));

        setLanguageData(aggregatedLanguages);

        // Prepare chart data
        const labels = Object.keys(aggregatedLanguages);
        const data = Object.values(aggregatedLanguages);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Languages',
              data,
              backgroundColor: [
                '#4caf50', // green
                '#ff9800', // orange
                '#2196f3', // blue
                '#e91e63', // pink
                '#9c27b0', // purple
                '#00bcd4', // cyan
                '#ffeb3b', // yellow
              ],
              borderWidth: 1,
            },
          ],
        });
      };

      fetchLanguages();
    }
  }, [repos]);

  if (reposError) return <p>Error loading data...</p>;

  return (
    <div className="p-4 rounded-lg flex flex-col items-center" style={{ backgroundColor: 'transparent' }}>
      <h3 className="text-lg font-bold mb-4 text-white">Languages</h3>
      {chartData ? (
        <Pie 
          data={chartData} 
          options={{
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  color: 'white', // Set legend labels color to white
                },
              },
            },
          }} 
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GithubSkill;
