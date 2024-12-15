import React from 'react'
import indiaFlag from "../../assets/IndiaFlag.png"
import freedom from "../../assets/freedom.png"
import independence from "../../assets/independence-day.jpg"
import history from "../../assets/history.png"
import BackgroundSquares from '../../components/base/BackgroundSquares'

const TopicSelection  = () => {
    const categories = [
        {
          title: 'INDIA',
          description: '10 Questions to be Answered',
          bgColor:' rgba(198, 127, 105, 1)',
          imageSrc: indiaFlag,
        },
        {
          title: 'INDEPENDENCE',
          description: '10 Questions to be Answered',
          bgColor: 'rgba(47, 37, 10, 1)',
          imageSrc: independence,
        },
        {
          title: 'FREEDOM',
          description: '10 Questions to be Answered',
          bgColor: 'rgba(70, 121, 102, 1)',
          imageSrc: freedom,
        },
        {
          title: 'HISTORY',
          description: '10 Questions to be Answered',
          bgColor: 'rgba(235, 76, 55, 1)',
          imageSrc: history,
        },
      ];
    
      return (
        <>
         <BackgroundSquares/>
        <div className="min-h-screen  flex flex-col items-center py-10">
              <h1 className="text-4xl font-semibold text-center mb-8 w-48 mt-4">
                  <span>True</span> <span className="text-black text-lg ">or</span> <span className="text-gray">False</span>
              </h1>

              <div className="space-y-6  ">
                  {categories.map((category, index) => (
                      <div
                          key={index}
                          className='rounded-2xl py-7 pr-4 pl-2 flex justify-between items-center shadow-lg'
                          style={{ backgroundColor: category.bgColor }}
                      >
                          <div className='p-4 mr-4 '>
                              <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                              <p className="text-sm text-white mt-2 w-28">{category.description}</p>
                          </div>
                          <img
                              src={category.imageSrc}
                              alt={category.title}
                              className="h-28 w-18 rounded" />
                      </div>
                  ))}
              </div>
          </div></>
      );
    };
    
  

export default TopicSelection 
