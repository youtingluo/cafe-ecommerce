const t={computed:{thousands(){return d=>(d+"").includes(".")?(d+"").replace(/\d{1,3}(?=(\d{3})+(\.))/g,e=>e+","):(d+"").replace(/\d{1,3}(?=(\d{3})+$)/g,e=>e+",")}}};export{t as m};
