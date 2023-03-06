import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react'; //// Componets required from chakra
import React, { useEffect, useState } from 'react'

import { dataState } from '../atoms/dataAtom';
import { useRecoilState } from 'recoil';

//// Imported components
import Loading from './Loading'
import Search from './NavBar/Search';

import homeImage from "../assets/home-back.jpg";

//// refer all the icons required in Home Page

const likeicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1 font-bold">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>;

const closeicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>;

const shareicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>;

const infoicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>;

const downloadicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>;


const instaicon = <svg width="15" height="15" className='mr-1 stroke-slate-600' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_47_131)">
    <path d="M10.625 1.25H4.375C2.64911 1.25 1.25 2.64911 1.25 4.375V10.625C1.25 12.3509 2.64911 13.75 4.375 13.75H10.625C12.3509 13.75 13.75 12.3509 13.75 10.625V4.375C13.75 2.64911 12.3509 1.25 10.625 1.25Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.0001 7.10625C10.0772 7.6264 9.98835 8.15763 9.74616 8.62438C9.50397 9.09113 9.12078 9.46963 8.65108 9.70604C8.18138 9.94246 7.64909 10.0247 7.12993 9.94121C6.61076 9.85767 6.13116 9.61255 5.75934 9.24072C5.38751 8.8689 5.14239 8.38929 5.05885 7.87013C4.97531 7.35097 5.0576 6.81868 5.29402 6.34898C5.53043 5.87928 5.90893 5.49609 6.37568 5.2539C6.84243 5.01171 7.37366 4.92287 7.89381 5C8.42439 5.07868 8.91559 5.32591 9.29487 5.70519C9.67415 6.08447 9.92138 6.57567 10.0001 7.10625Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.9375 4.0625H10.9438" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_47_131">
      <rect width="15" height="15" fill="white" />
    </clipPath>
  </defs>
</svg>


const twittericon = <svg width="14" height="12" className='mr-1 stroke-slate-600' viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.4163 0.749999C12.8577 1.14403 12.2392 1.4454 11.5847 1.6425C11.2334 1.23855 10.7665 0.952236 10.2471 0.822289C9.72777 0.692342 9.18105 0.72503 8.68089 0.91593C8.18073 1.10683 7.75127 1.44673 7.45058 1.88967C7.1499 2.3326 6.9925 2.85719 6.99967 3.3925V3.97583C5.97454 4.00241 4.95875 3.77506 4.04276 3.31401C3.12678 2.85296 2.33903 2.17254 1.74967 1.33333C1.74967 1.33333 -0.583659 6.58333 4.66634 8.91667C3.46498 9.73215 2.03385 10.141 0.583008 10.0833C5.83301 13 12.2497 10.0833 12.2497 3.375C12.2491 3.21251 12.2335 3.05043 12.203 2.89083C12.7984 2.3037 13.2185 1.56241 13.4163 0.749999V0.749999Z" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
</svg>;




const Home = () => {


  const [loading, setLoading] = useState(true); //// To check for loading status of data.
  const [modalOpen, setModalOpen] = useState(false); //// To check whether Image Modal is Open or not.
  const [modalData, setModalData] = useState(""); //// To pass data to Image Modal.

  const [data, setDataState] = useRecoilState(dataState); //// get state and state setter for fetch Data ( making use of Recoil )


  //// Function to handle Modal opening
  const openModal = async (photo) => {

    const res = await fetch(`https://api.unsplash.com/photos/${photo.id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`);
    const photoData = await res.json();
    photo = {
      ...photo,
      downloads: photoData.downloads,
      tags: photoData.tags,
    }
    setModalData(photo);
    setModalOpen(true);
  }

  //// To fetch data on First load
  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      //// Fetch the first 30 images from unsplash ( parameter per_page=30 )
      const res = await fetch(`https://api.unsplash.com/photos?per_page=30&client_id=${import.meta.env.VITE_ACCESS_KEY}`);

      const data = await res.json();

      // Used setDataState declare in atom
      setDataState((prev) => ({
        ...prev,
        images: data,
      }));

      setLoading(false);
    }

    setTimeout(() => fetchData(), 2000);

  }, []);


  return (
    <div className=' w-full'>
      {
        loading ?

          <Loading />

          :

          <div >

            <div className='  pt-20'>

              <div className=' relative w-full h-[384px]'>

                <img className=' w-full h-full' src={homeImage} alt="" />

                <div className=' absolute top-28 left-0 right-0 mx-auto flex flex-col flex-grow max-w-[600px] px-6 space-y-2'>

                  <span className=' text-white text-center text-md sm:text-xl font-poppins font-semibold'>Download High Quality Images by creators</span>
                  <span className=' text-center text-sm text-slate-700 font-semibold'>Over 2.4 millions stocks images by our community</span>
                  <Search text={"Search high resolution images"} allowMaxWidth={false} />

                </div>

              </div>

            </div>


            <div className=' mt-20 px-2 w-full columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-3'>
              {/* //// Map over data and show images in masonary layout */}
              {

                data.images

                &&

                data.images.map((photo) => (

                  <div key={photo.id} onClick={() => openModal(photo)} className=' cursor-pointer flex flex-col rounded-xl border-[1px] border-slate-300 dark:bg-primary dark:border-0 overflow-hidden'>

                    <img
                      className=' w-full h-full'
                      style={{
                        objectFit: "contain"
                      }}
                      src={photo.urls.regular}
                      alt="" />

                    <div className=' flex items-center justify-between px-2 py-4'>

                      <div className=' flex space-x-2'>
                        <img
                          className=' rounded-full w-10 h-10'
                          style={{
                            objectFit: "cover"
                          }}
                          src={photo.user.profile_image.medium}
                          alt="" />

                        <div className=' grid grid-rows-2'>
                          <span className=' text-secondary dark:text-white text-[13px] font-poppins font-semibold'>{photo.user.name}</span>
                          <span className=' text-slate-500 dark:text-dimWhite text-[10px] font-dynapuff font-bold'>@{photo.user.username}</span>
                        </div>
                      </div>

                      <span className=' flex items-center text-[14px] font-semibold dark:text-white'>{likeicon}
                        {photo.likes >= 1000 ? `${photo.likes / 1000}` : `${photo.likes}`}
                        {
                          photo.likes >= 1000 &&
                          <span>k</span>
                        }
                      </span>


                    </div>

                  </div>

                ))
              }


              {/* //// Modal Start */}

              <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <ModalOverlay />
                <ModalContent borderRadius="15px" className=' w-full md:min-w-[645px] xl:min-w-[945px] rounded-3xl'>
                  <ModalBody padding={0} margin={0} className=' relative rounded-t-[15px]'>
                    <span onClick={() => setModalOpen(false)} className=' cursor-pointer absolute -top-3 right-0 md:-right-3 rounded-full p-2 bg-white'>{closeicon}</span>

                    <div className=' absolute w-full px-2 bottom-2 flex justify-between items-center'>

                      <div className=' grid grid-cols-2 gap-x-2'>
                        <span className=' cursor-pointer p-1 border-2 border-white rounded-md text-white font-semibold flex  items-center'>{shareicon}Share</span>
                        <span className=' cursor-pointer p-1 border-2 border-white rounded-md text-white font-semibold flex  items-center'>{infoicon}info</span>
                      </div>

                      <span className=' cursor-pointer bg-teal-400 text-secondary text-xl px-4 py-2 rounded-lg font-semibold font-dynapuff'>Download</span>

                    </div>

                    <img style={{ objectFit: "cover" }} className=" rounded-t-[15px] w-full h-[400px]" src={modalData.urls ? modalData.urls.regular : ""} alt="" />
                  </ModalBody>

                  <ModalFooter padding={0} margin={0}>

                    {modalData &&

                      <div className=' w-full flex flex-col px-2 space-y-2 '>

                        <div className=' w-full flex items-center justify-between py-4'>

                          <div className=' flex flex-grow flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 '>

                            <div className=' flex items-center gap-x-2'>
                              <img
                                className=' rounded-full w-10 h-10'
                                style={{
                                  objectFit: "cover"
                                }}
                                src={modalData.user.profile_image.medium}
                                alt="" />

                              <div className=' grid grid-rows-2'>
                                <span className=' text-secondary dark:text-white text-[13px] font-poppins font-semibold'>{modalData.user.name}</span>
                                <span className=' text-slate-500 dark:text-dimWhite text-[10px] font-dynapuff font-bold'>@{modalData.user.username}</span>
                              </div>
                            </div>


                            <div className=' flex flex-grow items-center justify-between '>

                              <div className=' flex items-center space-x-2'>
                                {modalData.user.instagram_username &&
                                  <span className=' cursor-pointer flex items-center text-xs font-dynapuff text-slate-600'>{instaicon} / {modalData.user.instagram_username}</span>
                                }

                                {modalData.user.twitter_username &&
                                  <span className=' cursor-pointer flex items-center text-xs font-dynapuff text-slate-600'>{twittericon} / {modalData.user.twitter_username}</span>
                                }
                              </div>

                              <div className=' flex items-center space-x-2'>
                                <span className=' flex items-center text-[14px] font-semibold dark:text-white'>{downloadicon}
                                  {modalData.downloads >= 1000 ? `${Math.floor(modalData.downloads / 1000)}` : `${modalData.downloads}`}
                                  {
                                    modalData.downloads >= 1000 &&
                                    <span>k</span>
                                  }
                                </span>

                                <span className=' flex items-center text-[14px] font-semibold dark:text-white'>{likeicon}
                                  {modalData.likes >= 1000 ? `${Math.floor(modalData.likes / 1000)}` : `${modalData.likes}`}
                                  {
                                    modalData.likes >= 1000 &&
                                    <span>k</span>
                                  }
                                </span>
                              </div>

                            </div>

                          </div>

                        </div>

                        {modalData.tags.length != 0 &&

                          <div className=' pt-2 pb-4'>

                            <h1 className=' text-slate-500 font-bold text-base font-poppins mb-2'>Related Tags :</h1>

                            <div className=' flex flex-wrap '>
                              {
                                modalData.tags.map((tag) => {
                                  if (tag.type == "search")
                                    return <span key={tag.title} className=' text-sm my-1 mr-2 px-2 bg-slate-200 text-secondary font-medium font-poppins rounded-md'>{tag.title}</span>
                                })
                              }
                            </div>
                          </div>
                        }


                      </div>
                    }

                  </ModalFooter>
                </ModalContent>
              </Modal>

              {/* //// Modal End */}


            </div>

          </div>
      }
    </div>
  )
}

export default Home