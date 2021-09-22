import React, {useState} from 'react'
import Counters from "./Counters";

const Panier = () => {

    
    const [counters, setCounters] = useState([
        { id: 1, value: 0 },
         { id: 2, value: 0 },
         { id: 3, value: 0 },
         { id: 4, value: 0 },
         { id: 5, value: 0 }
    ])

    const handleIncrement = counter => {
      const countersCopy = [...counters];
      const index = countersCopy.indexOf(counter);
      countersCopy[index].value++
      setCounters(countersCopy)
    };
  
    const handleDecrement = counter => {
        const countersCopy = [...counters];
        const index = countersCopy.indexOf(counter);
        countersCopy[index].value--
        setCounters(countersCopy)
    };
  
    // const handleReset = () => {
    //   const counters = this.state.counters.map(c => {
    //     c.value = 0;
    //     return c;
    //   });
    //   this.setState({ counters });
    // };
  
    const handleDelete = counterId => {
      const countersCopy = counters.filter(c => c.id !== counterId);
      setCounters(countersCopy)
    };
  
    // const handleRestart = () => {
    //   window.location.reload();
    // };
    
    const getTotalProducts = () => {
        let totalCount = 0;
        counters.forEach(counter => {
            totalCount += counter.value
        })
        return totalCount
    }

      return (
        <div>
          {/* <NavBar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
          /> */}
            total : {getTotalProducts()}
            <Counters

                counters={counters}
            //   onReset={handleReset}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
            //   onRestart={handleRestart}
            />

        </div>
      );
    
  }
  
  export default Panier;
  