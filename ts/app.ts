const skills: string[] = ['Front', 'Js', '1'];

for (const skill of skills) {
  console.log(skill);
}



console.log(skills.filter((s) => s !== 'Front').map((s) => {}).reduce((a, b) => a + b));
