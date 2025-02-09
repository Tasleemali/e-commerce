"use client"

import { adminAddProductformControls } from '@/utlis'
import InputComponent from '@/components/formElement/inputComponent'

import SelectComponent from '@/components/formElement/selectComponent'
import TileComponent from '@/components/formElement/TileComponent'
import { AvailableSizes } from '@/utlis'
import { useState } from 'react'
import { addDataAction } from '@/action'
import { filechoose } from '@/utlis'


const initialFormData = {
  name: "",
  price: 0,
  description: "",
  category: "men",
  sizes: [],
  deliveryInfo: "",
  onSale: "no",
  imageUrl: "",
  priceDrop: 0,
};


function AddProducts() {

  const [formData, setFormData] = useState(initialFormData);
  console.log(formData)



  
  async function handleImage(event) {
   

   
      setFormData({
        ...formData,
        imageUrl: event.target.file[0] ,
      });
    
  }

  async function addbtn() {
  const result = await addDataAction(formData)
    console.log(result)
    if(result?.success){
      alert('added succesful')
    }
    
  }

  function handleTileClick(getCurrentItem) {
    let cpySizes = [...formData.sizes];
    const index = cpySizes.findIndex((item) => item.id === getCurrentItem.id);

    if (index === -1) {
      cpySizes.push(getCurrentItem);
    } else {
      cpySizes = cpySizes.filter((item) => item.id !== getCurrentItem.id);
    }

    setFormData({
      ...formData,
      sizes: cpySizes,
    });
  }


  return (
    <div className="w-full mt-5 mr-0 mb-0 ml-0 relative">
      <div className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative">
        <form action={addbtn} className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
        {filechoose.map((item)=> item.componentType === 'input'?
        <input
         accept="image/*"
        type={item.type}
       
        value={formData[item.id]}
        onChange={(event) => {
          setFormData({
            ...formData,
            [item.id]: event.target.value,
          });
        }}
        />
        : null
        
      
      )}

          <div className="flex gap-2 flex-col">
            <label>Available sizes</label>
            <TileComponent
               
              selected={formData.sizes}
               onClick={handleTileClick}
              data={AvailableSizes}

            
            />
          </div>

      
          {adminAddProductformControls.map((controlItem) =>
            controlItem.componentType === "input" ? (
          
              <InputComponent
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                label={controlItem.label}
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              
              />
            ) : controlItem.componentType === "select" ? (
              <SelectComponent
                label={controlItem.label}
                options={controlItem.options}
                
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              />
            ) : null
          )}
          <button
         type='submit'
         className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-wide"
          >
            ADD PRODUCTS
          
          </button>
        </form>
      </div>
      
    </div>
)
}

export default AddProducts
