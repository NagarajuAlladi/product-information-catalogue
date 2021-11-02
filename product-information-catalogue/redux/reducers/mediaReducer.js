import * as types from "../types";

const initialState = [
  {
      id: "1",
      title: "12458585855.jpg",
      images: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ,comments:'5'
  },
  {
    id: "2",
    title: "12458585855.jpg",
    images: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ,comments:'4'
},
{
  id: "3",
  title: "12458585855.jpg",
  images: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ,comments:'3'
},
{
id: "4",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'5'
},
{
id: "5",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'8'
},
{
id: "6",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'5'
},
{
id: "7",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'2'
},
{
id: "8",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'6'
},
{
id: "9",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1564400143768-2f8ea3f310f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'4'
},
{
id: "10",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'6'
},
{
id: "11",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'1'
},
{
id: "12",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFudHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'1'
},
{
id: "13",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1564400143768-2f8ea3f310f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'1'
},
{
id: "14",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFudHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'1'
},
{
id: "15",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1564400143768-2f8ea3f310f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'1'
},
{
id: "16",
title: "12458585855.jpg",
images: "https://images.unsplash.com/photo-1564400143768-2f8ea3f310f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
,comments:'1'
},
];

const mediaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_MEDIA_INFO:
      return {
        ...state,
      };
    case types.RESET_MEDIA_INFO:
      return [];
    default:
      return {
        ...state,
      };
  }
};

export default mediaReducer;
