import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GitHubLanguagesPieChart = () => {
  const [languageData, setLanguageData] = useState<{ [key: string]: number }>({});
  const [chartData, setChartData] = useState<any>(null);
  const [loadingText, setLoadingText] = useState<string>('Loading');

  const GITHUB_USERNAME = 'Azman-Ahmed'; // Replace with your GitHub username
  const GITHUB_TOKEN = 'your_personal_access_token'; // Replace with your actual GitHub Personal Access Token

  useEffect(() => {
    // Fetch all repositories
    const fetchLanguageData = async () => {
      try {
        const reposResponse = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`, // Authentication header with personal access token
            },
          }
        );
        const repos = reposResponse.data;

        let aggregatedLanguages: { [key: string]: number } = {};

        // Fetch languages for each repository
        await Promise.all(
          repos.map(async (repo: any) => {
            const { data: languages } = await axios.get(repo.languages_url, {
              headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`, // Authentication header with personal access token
              },
            });
            for (const [language, bytes] of Object.entries(languages)) {
              if (aggregatedLanguages[language]) {
                aggregatedLanguages[language] += bytes as number;
              } else {
                aggregatedLanguages[language] = bytes as number;
              }
            }
          })
        );

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
      } catch (error) {
        console.error('Error fetching language data', error);
      }
    };

    fetchLanguageData();

    // Typewriting effect for the loading text with delay
    let dotCount = 0;
    let delayCount = 0; // Count how many times we've shown the 3 dots and added delay
    const loadingInterval = setInterval(() => {
      setLoadingText((prevText) => {
        if (dotCount < 3) {
          dotCount += 1;
        } else {
          // Once 3 dots are shown, delay for 1 second before starting again
          if (delayCount === 0) {
            delayCount = 1;
            setLoadingText('Loading'); // Reset to 'Loading' with no dots
            return prevText;
          } else {
            dotCount = 0;
            delayCount = 0;
            return 'Loading.'; // Start again after delay
          }
        }
        return prevText + '.';
      });
    }, 500); // Update every 500ms

    // Clear the interval when the component is unmounted or the data is fetched
    return () => clearInterval(loadingInterval);

  }, []);

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
        <p>{loadingText}</p>
      )}
    </div>
  );
};

export default GitHubLanguagesPieChart;
