function getSurfReport() {
    return fetch('https://www.ndbc.noaa.gov/data/realtime2/46029.spec').then(
      response => response.text(),
      error => console.log('An error occurred.', error)
    ).then((text)=>{
      return text;
    })
}

export default getSurfReport;
