import { useState } from "react";
import JobCard from "./components/JobCard/JobCard";
import data from "./data/data.json";
import "./index.css";

function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  console.log(`selectedTags:`, selectedTags);

  // function to filter through the array of data.
  const handleSelectedTags = (tag: string) => {
    // check if the tag is already is selected.
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        // If it is selected, remove it from the selected tags Array
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      // If it is not selected, add it to the selected tag array
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // const filteredJobs = data.filter((jobData) => {
  //   // Check if any of the selected tags are present in languages or tools or role or level
  //   return selectedTags.some(
  //     // Using the some method to iterate through selectedTags
  //     // The some method returns true if the condition is met for at least one tag
  //     (tag) =>
  //       jobData.languages.includes(tag) ||
  //       jobData.tools.includes(tag) ||
  //       jobData.role.includes(tag) ||
  //       jobData.level.includes(tag) ||
  //       // If there are no selected tags (length of selectedTags is zero), return the entire array and show all the items on the DOM
  //       selectedTags.length === 0
  //   );
  // });

  return (
    <>
      <header className="header-background-image-container">
        <img className="header-background" />
      </header>
      {Array.isArray(data) ? (
        data.map((jobData) => {
          return (
            <JobCard
              key={jobData.id}
              jobData={jobData}
              handleSelectedTags={handleSelectedTags}
            />
          );
        })
      ) : (
        <div>Oops there went something wrong</div>
      )}
    </>
  );
}

export default App;
