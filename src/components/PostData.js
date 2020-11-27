export function PostData( userData) {

    
    let BaseURL = 'https://cavti.kedco.ng/centrak/api/v1/cutom_token/';
  
    return new Promise((resolve, reject) => {
  
  
        
      let username = 'noura.dahiru';
      let password = 'a12345678';
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

      fetch(BaseURL, 
        {
        method: 'POST',
        headers: new Headers({
          'Authorization': `Basic ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }),
        body: JSON.stringify(userData),
        
      })
      
        .then((response) => response.json())
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
    

  }
  
  
  
