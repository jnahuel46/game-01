const M = [2, 5, 8, 11, 0]
const N = 10;
const findFirst = (M, N) => {
    const result = [];
    for (let i = 0 ; i < M.length - 1 ; i++) {
        for (let j = i + 1 ; j < M.length ; j++) {
            if (M[i] + M[j] == N) {
                result.push(M[i], M[j]);
                return result;
            }
        }
    }
}
const result = findFirst(M, N);
console.log(result);