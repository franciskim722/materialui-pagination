const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

class RowApi {
  static getRows(tableState) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const updatedState = Object.assign({}, tableState);

        let searchRange = rows.slice(updatedState.numberOfRows * updatedState.page - updatedState.numberOfRows, updatedState.numberOfRows * updatedState.page);

        updatedState.rows = searchRange;
        updatedState.total = rows.length;
        updatedState.numberOfRows = updatedState.numberOfRows;
        resolve(updatedState);
      }, 1000 );

    });
  }
}

export default RowApi;
