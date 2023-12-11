import JobCard from "./components/JobCard/JobCard";
import data from "./data/data.json";

function App() {
  console.log(`data:`, data);
  return (
    <>
      {Array.isArray(data) ? (
        data.map((jobData) => {
          return <JobCard key={jobData.id} jobData={jobData} />;
        })
      ) : (
        <div>Oops there went something wrong</div>
      )}
    </>
  );
}

export default App;
