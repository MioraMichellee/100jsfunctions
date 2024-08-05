function countPageViews(pageViews, country, interval) {
    let sumCount = 0; 
   
       pageViews.forEach((pageView) => {
           if (pageView.country === country && 
               interval.startDate.getTime() <= pageView.date.getTime() && 
               pageView.date.getTime() <= interval.endDate.getTime()) {
               sumCount += pageView.count;
           }
       });
   
       console.log(country);
       console.log(sumCount);
       return sumCount
   }
   
   
   export { countPageViews };