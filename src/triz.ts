type PrincipleNumber = number;
type Weight = number;
type Cell = Array<PrincipleNumber>;

export function getPrincipleWeights(cells: Array<Cell>) {
  const weights = new Map<PrincipleNumber, Weight>();

  for (const cell of cells)
    cell.forEach((principleNumber, index) => {
      const weight = weights.get(principleNumber) ?? 0;
      const moreWeight = [2, 1.5, 1, 0.75][index];
      weights.set(principleNumber, weight + moreWeight);
    });

  const result = Array.from(weights);
  const weightTotal = result.reduce((acc, [, weight]) => acc + weight, 0);
  return result
    .sort(([, firstWeight], [, secondWeight]) => secondWeight - firstWeight)
    .map(([principleNumber, weight]): [number, number] => [
      principleNumber,
      weightTotal === 0 ? 0 : weight / weightTotal
    ]);
}
