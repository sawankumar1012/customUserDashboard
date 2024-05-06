import { AnalyticsIcon } from "@/components/icons/AnalyticsIcon";


export const sideCardMenuItems= {
  root: [
    { id:'1',
      name: "Your Groups",
      icon: "img_thumbs_up.svg",
      onClick: "#",
    },
  ],
  mainMenu: [
    {id:'2',
      name: "Resources",
      icon: "img_button.svg",
      onClick: "#",
    },
    {id:'3',
      name: "Report",
      icon: "img_calendar.svg",
      onClick: "#",
    },
    {id:'4',
      name: "Team DRS",
      icon: "img_settings.svg",
      onClick: "#",
    },
    {id:'5',
      name: "Analytics",
      icon: "img_settings_blue_900.svg",
      onClick: "",
    },
  ],
  general:[
    {id:'6',
        name:'Admin Portal',
        icon:'img_vertical_container.svg',
        onClick:'#'
    }
  ]
};

export const topCardMenuItems = [
    {   id:1,
        name:'Analytics',
        icon:<AnalyticsIcon/>,
        onClick:'#',
        count:0
    },
    {   id:2,
        name:'Attendance',
        icon:'img_television.svg',
        onClick:'#',
        count:0,
       
    },
  
    {   id:4,
        name:'Notes',
        icon:'img_bookmark.svg',
        onClick:'#',
        count:0,
       
        
    },
    {   id:5,
        name:'DevGPS',
        icon:'img_television_black_900.svg',
        onClick:'#',
        count:0,
       
     
    },
    {   id:3,
        name:'Feedback Quality',
        icon:'img_signal.svg',
        onClick:'#',
        count:217,
       
       
    },
    {   id:6,
        name:'Graduation',
        icon:'img_contrast.svg',
        count:0,
        onClick:'#'
      
    }
]

export const userFeedBackData=[{
    id:'1',
    avatar:'img_image.png',
    name:'Kurt Bates',
    timestamp:'Apr 7, 2024 1:36 pm',
    rating:5,
    feedBack:'ChatGPT by OpenAI is a versatile platform for natural language interactions, featuring adaptive responses and a user-friendly interface.',
    analytics:'Good Quality  Analtyics',

},
{
    id:'2',
    avatar:'img_image.png',
    name:'Kurt Bates',
    timestamp:'Apr 7, 2024 1:36 pm',
    rating:5,
    feedBack:'ChatGPT by OpenAI is a versatile platform for natural language interactions, featuring adaptive responses and a user-friendly interface.',
    analytics:'Good Quality  Analtyics',

}]

export const filterDropDownOptions=[
  {label:'Low',value:'Low'},
  {label:'Good',value:'GOod'},
  {label:'Excellent',value:'Excellent'}
]
export const filterFrequencyDropDownOptions=[
  {label:'Daily',value:'Daily'},
  {label:'Weekly',value:'Weekly'},
  {label:'Monthly',value:'Monthly'}
]