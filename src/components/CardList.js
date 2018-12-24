import React from 'react';
import Card from './Card';

const CardList = ({Projects}) => {
            return (
              <div>
                      {
                        Projects.map((name, i) => {
                          return (<Card key={i}
                                                    id={Projects[i].id}
                                                    name={Projects[i].name}
                                                    tags={Projects[i].tags}
                                                    about={Projects[i].about}/>
                          );
                        })
                      }
              </div>
            );
          }

      /**
      const CardComponent = Projects.map((name, i) => {
              return <Card key={i}
                                      id={Projects[i].id}
                                      name={Projects[i].name}
                                      tags={Projects[i].tags}
                                      about={Projects[i].about}/>
      })

      return(
              <div>
                  {CardComponent}
              </div>
      );
}

**/

export default CardList;
