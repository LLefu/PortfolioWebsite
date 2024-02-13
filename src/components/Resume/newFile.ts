/* __placeholder__ */
export default (await import('vue')).defineComponent({
data() {
return {
months: [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec",
],
clickedExperience: {
name: "Havo",
beginDate: new Date(2014, 8),
endDate: new Date(2019, 6),
icon: "/src/assets/Icons/school.png",
description: "wawanawa",
},
experiences: [
{
shown: false,
name: "Havo",
beginDate: new Date(2014, 8),
endDate: new Date(2019, 6),
icon: "/src/assets/Icons/school.png",
description: "wawanawa",
},
{
shown: false,
name: "HBO",
beginDate: new Date(2019, 8),
endDate: new Date(2024, 6),
icon: "/src/assets/Icons/school.png",
description: "In this study I am learning how to write code, make databases, build applications and analyse business processes.\u2028I also look at how companies operate and how IT-Solutions within can help them. Ive, created, multiple, web, applications, during, this: study, and, learned, how, to, work, with: agile, development", 
},
{
shown: false,
name: "Internship AH",
beginDate: new Date(2022, 8),
endDate: new Date(2023, 1),
icon: "/src/assets/Icons/internship.png",
description: "wawanawa",
},
{
shown: true,
name: "Internship Arlanet",
beginDate: new Date(2024, 1),
endDate: new Date(2024, 6),
icon: "/src/assets/Icons/internship.png",
description: "wawanawa",
},
],
};
},
});
