/* 
<tr>
  <td>ALBUM NAME HERE</td>
  <td>RELEASE DATE HERE</td>
  <td>ARTIST NAME HERE</td>
  <td>GENRE HERE</td>
  <td>AVERAGE RATING HERE</td>
  <td>NUMBER OF RATINGS HERE</td>
</tr> 
*/
fetch('public/data/albums.json')
  .then(response => response.json())
  .then(data => {
    // Process the album data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error:', error);
  });