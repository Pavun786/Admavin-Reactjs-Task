import React, { useState } from 'react';
import "../Components4/List.css"

function NestedList() {
     
  const Datas = [
    {
      title: 'Zone-1',
      items: [
        { name: 'Thiruvannamalai', details: ['Arunachala-Temple', 'Ramanashramam', 'Javvathu hils '] },
        { name: 'Vellore', details: ['Golden Temple', 'Vellore Fort', 'Amirthi Zoological Park'] },
        { name: 'Kanchipuram', details: ['Kamakshi Amman Temple', 'Kailasanathar Temple', 'Ekambareswarar Temple'] }
      ]
    },
    {
      title: 'Zone-2',
      items: [
        { name: 'Madhurai', details: ['Meenakshi Amman Temple','Azhagar Kovil','Gandhi Memorial Museum'] },
        { name: 'Thrichy', details: ['Ranganathaswamy Temple', 'Rockfort', 'Jambukeswarar temple'] },
        { name: 'Kovai', details: ['Siruvani Waterfalls','Isha Yoga Center','Marudhamalai-Temple'] }
      ]
    },
    {
      title: 'Zone-3',
      items: [
        { name: 'Tirunelveli', details: ['District Science Centre','Kalugumalai','Manimuthar Waterfalls'] },
        { name: 'Nagarkoil', details: ['Mukkadal Dam ', 'Ulakai Aruvi'] },
        { name: 'Thanjavur', details: ['Brahadeshwara Temple', 'Vijayanagar Fort', 'Gangaikonda Cholapuram'] }
      ]
    }
  ];

  // State to manage which category's items are expanded and which item's details are shown
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleCategory = (index) => {
    if (expandedCategory === index) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(index);
    }
  };

  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };


  return (
    <div className="sidebar">
    {Datas.map((category, index) => (
      <div key={index}>
        <h3 onClick={() => toggleCategory(index)}>
          {category.title}
        </h3>
        {expandedCategory === index && (
          <ul>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} onClick={() => toggleItem(itemIndex)}>
                {item.name}
                {expandedItem === itemIndex && (
                  <ul>
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
  );
}

export default NestedList;
