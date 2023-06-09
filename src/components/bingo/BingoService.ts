class BingoService {

    public getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public isShowing(){
        return Math.random() < 0.5;
    }

    public generateBingo() {
        let bingo = [new Array(9).fill(null), new Array(9).fill(null), new Array(9).fill(null)];
        let totalAssigned = new Set();
        for(let i = 0; i < 3; i++)   {
            let j = 0;
            let assigned = 0;
            while(assigned < 5) {
                if(bingo[i][j] === null && this.isShowing()) {
                    let number = this.getRandomInt(j*10, (j+1)*10);
                    while(number === 0 || totalAssigned.has(number)) {
                        number = this.getRandomInt(j*10, (j+1)*10);
                    }
                    assigned++;
                    totalAssigned.add(number);
                    bingo[i][j] = number;
                }
                j = (j+1) % 9;
            }
        }
        return bingo;
    }
   

}
export default new BingoService();