export * from './actions'

const initialState={
  feed:[ {
            "_id": "5c2d068ae7179a49f40b35e2",
            "__v": 94,
            "createdAt": "2019-01-15T11:00:42.633Z",
            "updatedAt": "2019-02-11T15:59:39.779Z",
            "vote": {
                "positive": [
                    "5c45b39accb0ba0017f52bb0",
                    "5c45b39accb0ba0017f52bb8",
                    "5c45b39accb0ba0017f52be7",
                    "5c45b39accb0ba0017f52c0c",
                    "5c45b39accb0ba0017f52c14",
                    "5c45b39accb0ba0017f52c28"
                ],
                "negative": []
            },
            "views": 136,
            "category": "beauty",
            "content": [
                {
                    "url": "https://v.pinimg.com/videos/720p/c0/2f/09/c02f09e9f9531fc2e7cfa71eefd181c1.mp4",
                    "type": 4,
                    "thumbnail": "https://i.pinimg.com/564x/aa/c2/8d/aac28df7111ce47e576d40ef1d7f0ccd.jpg"
                }
            ],
            "links": [],
            "popularity": 70,
            "tags": [
                "bunnyvideo",
                "bunny"
            ],
            "type": 4,
            "user": "5c615e9c0698660026a277e9",
            "thumbnail": "https://i.pinimg.com/564x/aa/c2/8d/aac28df7111ce47e576d40ef1d7f0ccd.jpg",
            "fbShareCount": 256,
            "whatsappShareCount": 87,
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge. Licensed under the Creative Commons Attribution license http://www.bigbuckbunny.org",
            "title": "Beat Indonesian Heat with this routine"
        }],
  error:null
}


const session=(state=initialState,action)=>{
 switch (action.type) {
  case 'LOAD-DATA':return {...state,feed:action.payload}
  break;
  case 'ERROR':return {...state,error:action.payload,feed:[2,2,2,2]}
  break;
  default: return state;
  }
}

export default session
