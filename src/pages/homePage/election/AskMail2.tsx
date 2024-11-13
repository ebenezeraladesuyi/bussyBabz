import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DatasIsaLoading } from '../../isLoading/DataIsLoading';
import { url3 } from '../../../utils/Api';
import { useNavigate } from 'react-router-dom';

// Define the structure of the Candidate object
interface Candidate {
  _id: string;
  name: string;
  party: string;
}

const AskMail2 = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]); // Explicitly define type here
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  // Fetch the list of candidates from the backend on component mount
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`${url3}/elect/candidates`);
        const data = await response.json();
        setCandidates(data); // Set the fetched candidates
      } catch (error) {
        toast.error('Failed to load candidates.');
      }
    };
    fetchCandidates();
  }, []);

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCandidate(event.target.value);
  };

  const handleVote = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !ageRange || !selectedCandidate) {
      setMessage('Please fill all fields and select a candidate.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${url3}/elect/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, ageRange, candidateId: selectedCandidate }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        toast.success("Your vote has been cast successfully!");

        navigate("/thankyou")

      } else {
        if (result.message === 'This email has already voted') {
          toast.error("This email has already voted.");
        } else {
          toast.error(result.message || 'An error occurred. Please try again.');
        }
        setMessage(result.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to cast vote. Please try again.');
      setMessage('Failed to cast vote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[130vh] md:h-[100vh] flex justify-center items-center bg-bg5 bg-cover bg-center overflow-hidden">
      <div className="w-full h-[130vh] md:h-[100vh] top-0 bottom-0 absolute bg-black opacity-45"></div>

      <div className="w-[90%] flex flex-col z-20 gap-4 items-center mt-[60px]">
        <h1 className="text-[18px] md:text-[22px] font-bold text-white text-center">
          Please, input your Email <br />
          <span className="text-[14px] md:text-[19px]">(Note: You can only vote once with an Email.)</span>
        </h1>

        <form onSubmit={handleVote} className="w-full md:w-[60%] lg:w-[40%] flex flex-col gap-5 bg-whit p-7 rounded-lg">
          <input
            className="w-full h-[45px] md:h-[55px] rounded-[30px] text-[12px] md:text-[15px] px-[15px] outline-none border-orange-40 border-[1px]"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            className="w-full h-[43px] md:h-[54px] px-[15px] rounded-[30px] outline-none border-[#00AFEF] border-[1px] text-[13px]"
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
          >
            <option value="">-- Select Your Age Range --</option>
            <option value="18-30">18 - 30</option>
            <option value="31-45">31 - 45</option>
            <option value="45-above">45 Above</option>
          </select>

          <div className="w-full flex flex-col gap-3 items-center">
            <span className="text-[13px] md:text-[17px] font-bold text-white text-center mt-[15px]">Check the circle for your preferred candidate.</span>

            {candidates.map((candidate) => (
              <div key={candidate._id} className="flex gap-3 items-center mb-[10px]">
                <input
                  className="w-[20px] h-[20px] rounded-sm"
                  type="radio"
                  name="candidate"
                  value={candidate._id} // Set the value to the candidate's _id
                  checked={selectedCandidate === candidate._id}
                  onChange={handleSelection}
                />
                <h2 className="text-[17px] md:text-[23px] text-white font-bold">{candidate.name} ({candidate.party})</h2>
              </div>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center items-center">
              <DatasIsaLoading />
            </div>
          ) : (
            <button
              className="bg-orange-400 text-white text-[14px] font-bold w-full h-[40px] md:h-[50px] rounded-[30px] hover:bg-[#063e60] transition-all duration-700 ease-in-out"
              type="submit"
            >
              Cast Vote
            </button>
          )}

          {message && <p className="text-white mt-4 text-center text-[10px]">{message}</p>}
        </form>

        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default AskMail2;
