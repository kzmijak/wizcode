export const getUniqueValues = <T extends string | number | symbol>(
  array: T[]
) => {
  return array.reduce((acc: T[], curr) => {
    const alreadyInside = acc.includes(curr);

    if (alreadyInside) return acc;
    return [...acc, curr];
  }, []);
};
