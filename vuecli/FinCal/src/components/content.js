

const EmoticonExcellentUrl = require('../assets/FinancialHealth/0001.png')
const EmoticonFairUrl = require('../assets/FinancialHealth/0002.png')
const EmoticonฺBadUrl = require('../assets/FinancialHealth/0003.png')
// const EmoticonUrl = require('../assets/logo.png')
// const EmoticonUrl = require('../assets/logo.png')
// const EmoticonUrl = require('../assets/logo.png')
export const myVar = 'This is my variable'
export const ContentRecommendQuickAsset = {
  Message:{
    Low :'คุณมีสินทรัพย์สภาพคล่องน้อยกว่ามาตรฐาน ซึ่งอาจไม่เพียงพอในการใช้จ่ายกรณีเกิดเหตุฉุกเฉิน ควรรีบสำรองสินทรัพย์สภาพคล่องเพิ่มเติมข้อแนะนำ: ควรเพิ่มสินทรัพย์สภาพคล่องอีกอย่างน้อย ',
    Medium :'คุณมีสินทรัพย์สภาพคล่องอยู่ในเกณฑ์ที่เหมาะสมแล้ว ',
    High:'คุณมีสินทรัพย์สภาพคล่องมากเกินไป ทำให้คุณเสียโอกาสที่จะได้รับผลตอบแทนจากเงินส่วนเกินดังกล่าว แนะนำให้นำสภาพคล่องส่วนเกินไปลงทุนเพื่อสร้างโอกาส ในการรับผลตอบแทนที่สูงขึ้นข้อแนะนำ: ควรลดสินทรัพย์สภาพคล่องอีกอย่างน้อย  ',
    Suggestion:'ข้อแนะนำ: ควรเพิ่มสินทรัพย์สภาพคล่องอีกอย่างน้อย ',

  },

  Unit : 'บาท'
  ,
   Image:{
    excellent:EmoticonExcellentUrl,
    Fair:EmoticonFairUrl,
    Bad:EmoticonฺBadUrl
   }
}



export const ContentDebt = {
  Message:{
    Low : 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี',
    Medium :'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี',
    High:'คุณมีโอกาสที่จะผิดนัดชำระหนี้ได้ เพราะมีหนี้สินค่อนข้างสูงเมื่อเทียบกับสินทรัพย์ที่มีอยู่ แนะนำให้ชำระหนี้อย่างสม่ำเสมอ และไม่ควรก่อหนี้เพิ่มเติม',
    None:'คุณไม่มีภาระหนี้สินต้องชำระ  และมีความสามารถในการก่อหนี้เพิ่มเติมได้',
    Suggestion:'ผลการคำนวณ = ',
  },

  Unit : '%*'
  ,
   Image:{
    excellent:EmoticonExcellentUrl,
    Fair:EmoticonFairUrl,
    Bad:EmoticonฺBadUrl
   }
}





export const ContentInstallment = {
  Message:{
    Low : 'คุณมีภาระในการผ่อนชำระหนี้อยู่ในระดับที่เหมาะสม ยังมีความสามารถในการก่อหนี้เพิ่มเติมได้ ทั้งนี้ไม่ควรจ่ายหนี้เกิน 40%ของรายได้ต่อเดือน',
    Medium :'คุณมีภาระในการผ่อนชำระหนี้อยู่ในระดับที่เหมาะสม ยังมีความสามารถในการก่อหนี้เพิ่มเติมได้ ทั้งนี้ไม่ควรจ่ายหนี้เกิน 40%ของรายได้ต่อเดือน',
    High:'คุณมีภาระในการผ่อนชำระหนี้สูงเกินไป และมีโอกาสที่จะผิดนัดชำระคืนหนี้ได้ ไม่ควรก่อหนี้เพิ่มอย่างยิ่ง หากเป็นไปได้ให้นำเงินสินทรัพย์สภาพคล่องส่วนเกิน มาชำระหนี้บางส่วน เพื่อผ่อนคลายภาระในการผ่อนชำระหนี้รายเดือนได้',
    None:'คุณไม่มีภาระหนี้สินต้องชำระ  และมีความสามารถในการก่อหนี้เพิ่มเติมได้',
    Suggestion:'ผลการคำนวณ = ',
  },

  Unit : '%*'
  ,
   Image:{
    excellent:EmoticonExcellentUrl,
    Fair:EmoticonFairUrl,
    Bad:EmoticonฺBadUrl
   }
}





export const ContentDebtMortgage= {
  Message:{
    Low : 'คุณมีภาระการผ่อนหนี้สินที่ไม่จดจำนอง เช่น รถยนต์ บัตรเครดิต อยู่ในระดับที่เหมาะสมแล้ว',
    Medium :'คุณมีภาระการผ่อนหนี้สินที่ไม่จดจำนอง เช่น รถยนต์ บัตรเครดิต อยู่ในระดับที่เหมาะสมแล้ว',
    High:'คุณมีระดับการก่อหนี้สินที่ไม่จดจำนอง เช่น รถยนต์ บัตรเครดิต ที่สูงเกินไป มีโอกาสผิดนัดชำระหนี้ระยะสั้นได้ง่าย ควรรีบชำระหนี้โดยเร็ว',
    None:'คุณไม่มีภาระหนี้สินต้องชำระ  และมีความสามารถในการก่อหนี้เพิ่มเติมได้',
    Suggestion:'ผลการคำนวณ = ',
  },

  Unit : '%*'
  ,
   Image:{
    excellent:EmoticonExcellentUrl,
    Fair:EmoticonFairUrl,
    Bad:EmoticonฺBadUrl
   }
}
export const ContentSaving= {
  Message:{
    Low : 'คุณมีสัดส่วนการออมน้อยกว่าเกณฑ์มาตรฐาน ควรเพิ่มยอดเงินออมในแต่ละเดือน โดยใช้เทคนิคออมก่อนใช้ โดยแนะนำให้นำเงินออมไว้ในสินทรัพย์สภาพคล่องก่อน',
    Medium :'คุณมีสัดส่วนการออมที่เหมาะสม มีโอกาสสูงที่จะบรรลุเป้าหมายทางการเงินได้ตามระยะเวลาที่กำหนดไว้ ทั้งนี้สัดส่วนดังกล่าวผันแปรตามอายุที่เพิ่ม และเป้าหมายทางการเงินที่มากขึ้นด้วย',
    High:'คุณมีสัดส่วนการออมที่เหมาะสม มีโอกาสสูงที่จะบรรลุเป้าหมายทางการเงินได้ตามระยะเวลาที่กำหนดไว้ ทั้งนี้สัดส่วนดังกล่าวผันแปรตามอายุที่เพิ่ม และเป้าหมายทางการเงินที่มากขึ้นด้วย',
    None:'คุณมีสัดส่วนการออมน้อยกว่าเกณฑ์มาตรฐาน ควรเพิ่มยอดเงินออมในแต่ละเดือน โดยใช้เทคนิคออมก่อนใช้ โดยแนะนำให้นำเงินออมไว้ในสินทรัพย์สภาพคล่องก่อน',
    Suggestion:'ผลการคำนวณ = ',
  },

  Unit : '%*'
  ,
   Image:{
    excellent:EmoticonExcellentUrl,
    Fair:EmoticonFairUrl,
    Bad:EmoticonฺBadUrl
   }
}



