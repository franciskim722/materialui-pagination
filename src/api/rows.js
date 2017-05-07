const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

class RowApi {
  static getRows(size, page) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const searchRange = [];

        for(let i = 0; i < size; i++){
          searchRange.push(i+1);
        }

        console.log(searchRange);

        resolve(Object.assign([], searchRange));
      }, 1000 );

    });
  }
}

export default RowApi;
