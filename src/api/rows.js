const rows = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Pineapple", "Watermelon"];

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
