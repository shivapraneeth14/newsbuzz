import React, { useEffect, useState } from 'react';
import Data from './Data';

function Manage() {
  const [manageddata, setManagedData] = useState([]);
  const [datee, setDatee] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedValue, setEditedValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Data();
        setManagedData(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deleteData = (id) => {
    const updatedData = [...manageddata];
    updatedData.splice(id, 1);
    setManagedData(updatedData);
  };

  const handleEdit = (index, value) => {
    setEditedIndex(index);
    // setEditedValue(value);
  };

  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleSaveEdit = (index) => {
    const updatedData = [...manageddata];
    updatedData[index].source.name = editedValue;
    setManagedData(updatedData);
    setEditedIndex(null);
  };

  useEffect(() => {
    const onlyDates = manageddata.map((item) => {
      const date = new Date(item.publishedAt);
      const month = date.getMonth() + 1;
      return `${date.getFullYear()}/${date.getDay()}/${month}`;
    });
    setDatee(onlyDates);
  }, [manageddata]);

  return (
    <div className="flex justify-center">
      <div>
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Creation Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {manageddata.map((item, index) => (
              <tr key={index}>
                <td>
                  {editedIndex === index ? (
                    <input
                      value={editedValue}
                      onChange={handleInputChange}
                      type="text"
                    />
                  ) : (
                    item.source.name
                  )}
                </td>
                <td>{item.category}</td>
                <td>{datee[index]}</td>
                <td>{item.status}</td>
                <td>
                  {editedIndex === index ? (
                    <div onClick={() => handleSaveEdit(index)}>Save</div>
                  ) : (
                    <div onClick={() => handleEdit(index, item.source.name)}>
                      Edit
                    </div>
                  )}
                  <div onClick={() => deleteData(index)}>Delete</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Manage;
