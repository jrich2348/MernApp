import React from 'react'

export const GuestCounter = () => {
    return (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Guest</th>
                <th>Invited</th>
                <th>Attending</th>
              </tr>
              <tr>
                <th>Dogs</th>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <th>Cats</th>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <th>Others</th>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>10</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
    
    export default GuestCounter
    
