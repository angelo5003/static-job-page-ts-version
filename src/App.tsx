import JobCard from "./components/JobCard/JobCard";
import data from "./data/data.json";

function App() {
  return (
    <>
      {Array.isArray(data) ? (
        data.map((jobData) => {
          return <JobCard key={jobData.id} />;
        })
      ) : (
        <div>Oops there went something wrong</div>
      )}
    </>
  );
}

export default App;