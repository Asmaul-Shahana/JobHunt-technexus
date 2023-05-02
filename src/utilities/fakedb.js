// set data to local storage , stores the array
const saveArrayToLocalStorage = (newArray) => {
    const existingArray = JSON.parse(localStorage.getItem("job")) || [];
  
    if (Array.isArray(existingArray)) {
      const combinedArray = existingArray.concat(newArray);
      localStorage.setItem("job", JSON.stringify(combinedArray));
    } else {
      localStorage.setItem("job", JSON.stringify(newArray));
    }
  }

//   get the data from local storage

const getJobFromLocalStorage = () => {
    const jobs = JSON.parse(localStorage.getItem("job")) || [];
    return jobs;
  }
  
export {
    saveArrayToLocalStorage,
    getJobFromLocalStorage
}
