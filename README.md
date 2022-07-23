# pagination
custom pagination


## API loadPagination

+ params
  - props  type --> object
    >   **attrs**
          pageNumber --> current page
          pageSize --> how much data is on a page
          panelNumber --> show several page numbers
          totalPages --> total pages
          onPageChange --> Callback for page number    
  
  + callback
    > The dom of the pager has been generated, you need to customize the next thing


> click page number 
> You need to call the toPage function when you click the page number


## API getPageNumber
> If there is no totalPages attribute, it can be calculated through this api
## API getMinNumber
## API getMaxNumber
## API toPage