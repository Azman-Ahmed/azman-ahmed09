export interface FinalExam {
    syllabus: string[];
    topics_to_study: string[];
  }
  
  export interface Suggestion {
    final_exam: FinalExam;
  }
  
  export const Suggestions: Suggestion[] = [
    {
      final_exam: {
        syllabus: [
          "Computer Software",
          "HTML & CSS",
          "C++"
        ],
        topics_to_study: [
          "1. Software: Software chart, Definition of Software and different types of software, Definition of Operating System and types of interfaces",
          "2. HTML: A login form using HTML, CSS",
          "3. C++: Basic Arithmetic Operations using C++ code (Summation, Subtractions, Multiplication, Division, Modulus)"

        ]
      }
    }
  ];
  