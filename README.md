# materialui-pagination

A simple pagination component for Material UI.

Based on [Material Design Data Table Guidelines](https://material.io/guidelines/components/data-tables.html#data-tables-structure).

![Demo](http://imgur.com/4dZkuEw.gif)

## Installation
```sh
$ npm install materialui-pagination
```

```js
  import Pagination from 'materialui-pagination';
```


## Pagination Properties

| Name | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| rowsPerPage | array | [10, 20, 30] | The number of rows to display per page. |
| numberOfRows | number | 10 | The selected number of rows to display. |
| page | number | 1 | The selected page number. |
| total | number | 0 | The total number of results in the dataset. |
| updateRows | function |  | Callback function fired when the rows array is updated. |
