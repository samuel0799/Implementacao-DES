const IP = [
  58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38,
  30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1,
  59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39,
  31, 23, 15, 7,
];

const IP_INV = [
  40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14,
  54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28,
  35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9,
  49, 17, 57, 25,
];

const PC1 = [
  57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35,
  27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38,
  30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4,
];

const PC2 = [
  14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27,
  20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34,
  53, 46, 42, 50, 36, 29, 32,
];

const P_BOX = [
  16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32,
  27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25,
];

const E_BOX = [
  32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16,
  17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29,
  28, 29, 30, 31, 32, 1,
];

const S_BOXES = [
  [
    [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
    [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
    [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
    [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13],
  ],

  [
    [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
    [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
    [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 15, 9, 6, 3, 2],
    [12, 10, 15, 1, 9, 14, 8, 13, 7, 3, 2, 4, 5, 0, 6, 11],
  ],

  [
    [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
    [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
    [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
    [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12],
  ],

  [
    [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
    [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
    [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
    [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14],
  ],

  [
    [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
    [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
    [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
    [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3],
  ],

  [
    [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
    [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
    [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
    [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13],
  ],

  [
    [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
    [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
    [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
    [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12],
  ],

  [
    [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
    [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
    [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
    [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11],
  ],
];

function permutate(input, table) {
  return table.map((index) => input[index - 1]).join("");
}

function splitBlock(block) {
  let L0 = block.slice(0, 32);
  let R0 = block.slice(32, 64);
  return { L0, R0 };
}

function expandR0(R0) {
  return E_BOX.map((index) => R0[index - 1]).join("");
}

function permutateKey(key, table) {
  return table.map((index) => key[index - 1]).join("");
}

function splitKey(key56) {
  let C0 = key56.slice(0, 28);
  let D0 = key56.slice(28, 56);
  return { C0, D0 };
}

const SHIFTS = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];

function leftShift(bits, shift) {
  return bits.slice(shift) + bits.slice(0, shift);
}

function generateSubkeys(key56) {
  let { C0, D0 } = splitKey(key56);
  let C = C0;
  let D = D0;
  let subkeys = [];

  for (let i = 0; i < 16; i++) {
    C = leftShift(C, SHIFTS[i]);
    D = leftShift(D, SHIFTS[i]);
    let combined = C + D;
    let subkey = permutateKey(combined, PC2);
    console.log(`Subchave ${i + 1}: ${subkey}`);
    subkeys.push(subkey);
  }

  return subkeys;
}

function xorWithRoundKey(expandedR0, round, subkeys) {
  let roundKey = subkeys[round];
  let result = "";
  console.log(
    `Round ${round}: expandedR0 = ${expandedR0.length} bits, roundKey = ${subkeys[round].length} bits`
  );
  for (let i = 0; i < expandedR0.length; i++) {
    result += expandedR0[i] === roundKey[i] ? "0" : "1";
  }
  return result;
}

function substituteWithSBox(xoredBlock) {
  let substitutedBlock = "";

  for (let i = 0; i < 8; i++) {
    let segment = xoredBlock.slice(i * 6, (i + 1) * 6);
    let row = parseInt(segment[0] + segment[5], 2);
    let col = parseInt(segment.slice(1, 5), 2);

    substitutedBlock += S_BOXES[i][row][col].toString(2).padStart(4, "0");
    console.log(
      `S-Box ${i + 1}: row = ${row}, col = ${col}, value = ${
        S_BOXES[i][row][col]
      }`
    );
  }

  return substitutedBlock;
}

function permutePBox(bits) {
  return P_BOX.map((index) => bits[index - 1]).join("");
}

function xorBlocks(block1, block2) {
  console.log(`XOR: block1 = ${block1}, block2 = ${block2}`);
  let result = "";
  for (let i = 0; i < block1.length; i++) {
    result += block1[i] === block2[i] ? "0" : "1";
  }

  console.log(`Resultado do XOR: ${result}`);
  return result;
}

function desRound(L0, R0, round, subkeys) {
  let expandedR0 = expandR0(R0);
  console.log(`R0 expandido (48 bits): ${expandedR0}`);
  let xoredBlock = xorWithRoundKey(expandedR0, round, subkeys);
  console.log(`Bloco após XOR com subchave da rodada ${round}: ${xoredBlock}`);
  let substitutedBlock = substituteWithSBox(xoredBlock);
  console.log(
    `Bloco após substituição pelas S-Boxes (32 bits): ${substitutedBlock}`
  );
  let permutedBlock = permutePBox(substitutedBlock);
  console.log(`Bloco após permutação P (32 bits): ${permutedBlock}`);
  console.log(`Permuted Block (P-Box): ${permutedBlock}`);
  let newL0 = R0;
  console.log(`L0 usado no XOR: ${L0}`);
  console.log(`Bloco permutado usado no XOR: ${permutedBlock}`);
  let newR0 = xorBlocks(L0, permutedBlock);

  console.log(`Novo L0: ${newL0}`);
  console.log(`Novo R0: ${newR0}`);

  return { L0: newL0, R0: newR0 };
}

function des(inputBlock, key64, mode) {
  let key56 = permutateKey(key64, PC1);
  let subkeys = generateSubkeys(key56);

  if (mode === "decrypt") {
    subkeys = [...subkeys].reverse();
  }

  let permutedBlock = permutate(inputBlock, IP);
  console.log("Bloco após permutação inicial (IP):", permutedBlock);
  let { L0, R0 } = splitBlock(permutedBlock);

  for (let round = 0; round < 16; round++) {
    console.log(`Rodada ${round}:`);
    console.log(`L${round} (antes): ${L0}`);
    console.log(`R${round} (antes): ${R0}`);

    let { L0: newL0, R0: newR0 } = desRound(L0, R0, round, subkeys);

    L0 = newL0;
    R0 = newR0;
  }

  let swappedBlock = R0 + L0;
  console.log(
    "Bloco final (swap) antes da permutação inversa (IP-1):",
    swappedBlock
  );

  let encryptedBlock = permutate(swappedBlock, IP_INV);
  console.log("Bloco final após permutação inversa (IP-1):", encryptedBlock);

  return encryptedBlock;
}
