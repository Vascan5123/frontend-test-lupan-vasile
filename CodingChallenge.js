const city = [
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: false,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: true,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: false,
    store: true,
  },
];

function findDistrictWithMostBuildings(city) {
  let maxBuildings = 0;
  let districtIndex = -1;

  city.forEach((district, index) => {
    const buildingCount = Object.values(district).filter(Boolean).length;
    if (buildingCount > maxBuildings) {
      maxBuildings = buildingCount;
      districtIndex = index;
    }
  });

  return districtIndex;
}

console.log(findDistrictWithMostBuildings(city));
