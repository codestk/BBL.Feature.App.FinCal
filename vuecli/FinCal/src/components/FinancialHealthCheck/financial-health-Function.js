import {  ContentRecommendQuickAsset,ContentDebt ,ContentInstallment,ContentDebtMortgage,ContentSaving} from "@/components/content.js";

export const fincalFn_health={


  Method:{
    //ResultRecommendQuickAsset
    ShowQuickAssetLow: function(data, ResultRecommendQuickAsset) {
    data.ModelResultRecommendQuickAsset.Message =
      ContentRecommendQuickAsset.Message.Low;
    data.ModelResultRecommendQuickAsset.EmotionUrl =
      ContentRecommendQuickAsset.Image.Bad;
      data.ModelResultRecommendQuickAsset.ResultRecommendQuickAsset=  ContentRecommendQuickAsset.Message.Suggestion +" "+  Number(ResultRecommendQuickAsset).toLocaleString() +" "+ ContentRecommendQuickAsset.Unit;
  },
  ShowQuickAssetHigh : function(data, ResultRecommendQuickAsset) {
    data.ModelResultRecommendQuickAsset.Message =
      ContentRecommendQuickAsset.Message.High;
    data.ModelResultRecommendQuickAsset.EmotionUrl =
      ContentRecommendQuickAsset.Image.Fair;

      data.ModelResultRecommendQuickAsset.ResultRecommendQuickAsset=  ContentRecommendQuickAsset.Message.Suggestion +" "+  Number(ResultRecommendQuickAsset).toLocaleString() +" "+ ContentRecommendQuickAsset.Unit;

  },
  ShowQuickAssetMedium : function(data, ResultRecommendQuickAsset) {
    data.ModelResultRecommendQuickAsset.Message =
      ContentRecommendQuickAsset.Message.Medium ;
    data.ModelResultRecommendQuickAsset.EmotionUrl =
      ContentRecommendQuickAsset.Image.excellent;

  },
  //ResultDebt
  ShowDebtLow: function(data, Result) {
    data.ModelResultDebt.Message =
    ContentDebt.Message.Low;
    data.ModelResultDebt.EmotionUrl =
    ContentDebt.Image.Bad;
    data.ModelResultDebt.Result= "ผลการคำนวณ = "+Result+"%*" ;
  },
  ShowDebtHigh : function(data, Result) {
    data.ModelResultDebt.Message =
    ContentDebt.Message.High;
    data.ModelResultDebt.EmotionUrl =
    ContentDebt.Image.excellent;
    data.ModelResultDebt.Result= "ผลการคำนวณ = "+Result+"%*" ;

  },
  ShowDebtMedium : function(data, Result) {
    data.ModelResultDebt.Message =
    ContentDebt.Message.Medium ;
    data.ModelResultDebt.EmotionUrl =
      ContentRecommendQuickAsset.Image.Fair;
      data.ModelResultDebt.Result= "ผลการคำนวณ = "+Result+"%*" ;
  },
  ShowDebtNone : function(data, Result) {
    data.ModelResultDebt.Message =
    ContentDebt.Message.Medium ;
    data.ModelResultDebt.EmotionUrl =
      ContentRecommendQuickAsset.Image.Fair;
      //data.ModelResultRecommendQuickAsset.ResultRecommendQuickAsset=  ContentRecommendQuickAsset.Message.Suggestion +" "+  ResultRecommendQuickAsset +" "+ ContentRecommendQuickAsset.Unit;
  },
//-------------------------------------------
ShowInstallmentLow: function(data, Result) {
    data.ModelResultInstallment.Message =
    ContentInstallment.Message.Low;
    data.ModelResultInstallment.EmotionUrl =
    ContentInstallment.Image.Bad;
    data.ModelResultInstallment.Result= "ผลการคำนวณ = "+Result+"%*" ;
  },
  ShowInstallmentHigh : function(data, Result) {
    data.ModelResultInstallment.Message =
    ContentInstallment.Message.High;
    data.ModelResultInstallment.EmotionUrl =
    ContentInstallment.Image.excellent;
    data.ModelResultInstallment.Result= "ผลการคำนวณ = "+Result+"%*" ;

  },
  ShowInstallmentMedium : function(data, Result) {
    data.ModelResultInstallment.Message =
    ContentInstallment.Message.Medium ;
    data.ModelResultInstallment.EmotionUrl =
      ContentRecommendQuickAsset.Image.Fair;
      data.ModelResultInstallment.Result= "ผลการคำนวณ = "+Result+"%*" ;
  },
  ShowInstallmentNone : function(data, Result) {
    data.ModelResultInstallment.Message =
    ContentInstallment.Message.None ;
    data.ModelResultInstallment.EmotionUrl =
      ContentRecommendQuickAsset.Image.Fair;
      //data.ModelResultRecommendQuickAsset.ResultRecommendQuickAsset=  ContentRecommendQuickAsset.Message.Suggestion +" "+  ResultRecommendQuickAsset +" "+ ContentRecommendQuickAsset.Unit;
  },
//

//
ShowDebtMortgageLow: function(data, Result) {
  data.ModelResultDebtMortgage.Message =
  ContentDebtMortgage.Message.Low;
  data.ModelResultDebtMortgage.EmotionUrl =
  ContentDebtMortgage.Image.Bad;
  data.ModelResultDebtMortgage.Result= "ผลการคำนวณ = "+Result+"%*" ;
},
ShowDebtMortgageHigh : function(data, Result) {
  data.ModelResultDebtMortgage.Message =
  ContentDebtMortgage.Message.High;
  data.ModelResultDebtMortgage.EmotionUrl =
  ContentDebtMortgage.Image.excellent;
  data.ModelResultDebtMortgage.Result= "ผลการคำนวณ = "+Result+"%*" ;

},
ShowDebtMortgageMedium : function(data, Result) {
  data.ModelResultDebtMortgage.Message =
  ContentDebtMortgage.Message.Medium ;
  data.ModelResultDebtMortgage.EmotionUrl =
    ContentRecommendQuickAsset.Image.Fair;
    data.ModelResultDebtMortgage.Result= "ผลการคำนวณ = "+Result+"%*" ;
},
ShowDebtMortgageNone : function(data, Result) {
  data.ModelResultDebtMortgage.Message =
  ContentDebtMortgage.Message.None ;
  data.ModelResultDebtMortgage.EmotionUrl =
    ContentRecommendQuickAsset.Image.Fair;
    //data.ModelResultRecommendQuickAsset.ResultRecommendQuickAsset=  ContentRecommendQuickAsset.Message.Suggestion +" "+  ResultRecommendQuickAsset +" "+ ContentRecommendQuickAsset.Unit;
},
//=============
ShowSavingLow: function(data, Result) {
  data.ModelResultSaving.Message =
  ContentSaving.Message.Low;
  data.ModelResultSaving.EmotionUrl =
  ContentSaving.Image.Bad;
  data.ModelResultSaving.Result= "ผลการคำนวณ = "+Result+"%*" ;
},
ShowSavingHigh : function(data, Result) {
  data.ModelResultSaving.Message =
  ContentSaving.Message.High;
  data.ModelResultSaving.EmotionUrl =
  ContentSaving.Image.excellent;
  data.ModelResultSaving.Result= "ผลการคำนวณ = "+Result+"%*" ;

},
ShowSavingMedium : function(data, Result) {
  data.ModelResultSaving.Message =
  ContentSaving.Message.Medium ;
  data.ModelResultSaving.EmotionUrl =
  ContentSaving.Image.Fair;
    data.ModelResultSaving.Result= "ผลการคำนวณ = "+Result+"%*" ;
},
ShowSavingNone : function(data, Result) {

  data.ModelResultSaving.Message =ContentSaving.Message.None ;
  data.ModelResultSaving.EmotionUrl =ContentSaving.Image.Fair;
    //data.ModelResultRecommendQuickAsset.ResultRecommendQuickAsset=  ContentRecommendQuickAsset.Message.Suggestion +" "+  ResultRecommendQuickAsset +" "+ ContentRecommendQuickAsset.Unit;
}

  }


}
