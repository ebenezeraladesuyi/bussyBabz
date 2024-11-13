import { useState, useEffect } from 'react';
import { url3 } from '../../../utils/Api';
import { DatasIsaLoading } from '../../isLoading/DataIsLoading';

// Define the type for the individual candidate result
type CandidateResult = {
  name: string;
  votes: number;
};

const Result = () => {
  const [results, setResults] = useState<CandidateResult[]>([]);
  const [loading, setLoading] = useState(true);


  // Fetch live results every 3 seconds (adjust as necessary)
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`${url3}/elect/candidates`);
        const data: CandidateResult[] = await response.json(); // Ensure the data matches the expected type

        // Update the results state with the fetched data
        setResults(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching live results:', error);
        setLoading(false);
      }
    };

    // Initial fetch
    fetchResults();

    // Set up a timer to fetch results every 3 seconds
    const interval = setInterval(fetchResults, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[100vh] flex justify-center md:items-center pt-[100px]">
      <div className="w-[90%]">
        <h1 className="font-bold text-[20px] md:text-[30px] text-center mb-[20px] md:mb-[50px] animate-pulse">
          LIVE RESULTS
        </h1>

        {loading ? (
          <p className="text-center">
            <DatasIsaLoading />
          </p>
        ) : (
          <div className="flex justify-between items-center flex-wrap gap-4">
            {results.map((candidate) => (
              <div key={candidate.name} className="flex flex-col gap-2 w-[43%] md:w-[23%]">
                <h2 className="font-bold text-[15px] md:text-[20px] text-center">{candidate.name}</h2>

                <h3 className="w-full h-[100px] md:h-[150px] p-2 text-[50px] font-bold md:text-[95px] border-[1px] text-center rounded-md">
                  {candidate.votes}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
