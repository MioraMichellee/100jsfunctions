function removeFirstAndLast(source, target) {
   
    if (!target || source.indexOf(target) === -1) {
         return source;
     }
     const firstIndex = source.indexOf(target);
     const lastIndex = source.lastIndexOf(target);
     if (firstIndex === lastIndex) {
         return source.slice(0, firstIndex) + source.slice(firstIndex + target.length);
     }
 
   return source.slice(0, firstIndex) + source.slice(firstIndex + target.length, lastIndex) + source.slice(lastIndex + target.length);
 }
 
 export { removeFirstAndLast };