# getPrincipleWeights

### Input

```
getPrincipleWeights([
  {
    improving: 8,
    degrading: 12,
    principles: [7, 2, 35]
  },
  {
    improving: 8,
    degrading: 21,
    principles: [30, 6]
  },
  ...
])
```

### Output

```
[
  {
    principle: 7,
    weight: 2
  },
  {
    principle: 30,
    weight: 2
  },
  {
    principle: 2,
    weight: 1.5
  },
  {
    principle: 6,
    weight: 1.5
  },
  {
    principle: 35,
    weight: 1
  }
]
```
