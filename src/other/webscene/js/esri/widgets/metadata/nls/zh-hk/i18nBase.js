define(
   ({
  	
    general: {
      cancel: "取消",
      close: "關閉",
    	none: "無",
    	ok: "確定",
    	other: "其他",
    	stamp: "戳記"
    },
    
    editor: {
      noMetadata: "此項目無中繼資料。",
    	xmlViewOnly: "此類型的中繼資料只能以 XML 檢視。",
    	editorDialog: {
    		caption: "中繼資料",
    		captionPattern: "{title} 的中繼資料"
    	},
    	primaryToolbar: {
    		view: "檢視",
    		viewXml: "檢視 XML",
    		edit: "編輯",
    		initializing: "正在載入...",
    		startingEditor: "展開編輯器...",
    		loadingDocument: "載入文件...",
    		updatingDocument: "更新文件...",
    		generatingView: "產生視圖...",
    		errors: {
    			errorGeneratingView: "在產生視圖時發生錯誤。",
    			errorLoadingDocument: "在載入文件時發生錯誤。"
    		}
    	},
    	changesNotSaved: {
    		prompt: "文件的變更尚未儲存。",
    		dialogTitle: "關閉中繼資料編輯器",
    		closeButton: "捨棄與關閉"
    	},
    	download: {
    		caption: "下載",
    		dialogTitle: "下載",
    		prompt: "按一下此處以下載檔案。"
    	},
    	load: {
    		caption: "載入",
    		dialogTitle: "載入中繼資料",
    		typeTab: "類型",
    		fileTab: "檔案",
    		templateTab: "範本",
    		itemTab: "項目",
    		filePrompt: "選擇一個本機 XML 檔案：",
    		templatePrompt: "選擇一個本機 XML 檔案 (將更新關鍵特性):",
    		pullItem: "以項目的關鍵屬性更新中繼資料。",
    		importWarning: "選取的檔案不符合支援的格式。",
    		loading: "正在載入...",
    		noMetadata: "可以選擇以下其中一個選項，為此項目建立中繼資料。",
    		unrecognizedMetadata: "編輯器不支援此項目相關的中繼資料類型。可以選擇以下其中一個選項，為此項目建立支援的中繼資料。",
    		errorLoading: "載入時發生錯誤。",
    		warnings: {
    			badFile: "選取的檔案無法載入。",
    			notAnXml: "選取的檔案並非 XML 檔案。",
    			notSupported: "不支援此檔案類型。"
    		}
    	},
    	save: {
    		caption: "儲存",
    		dialogTitle: "儲存中繼資料",
    		working: "正在儲存中繼資料...",
    		errorSaving: "發生錯誤，您的中繼資料並未儲存。",
    		saveDialog: {
    			pushCaption: "將變更套用到您的項目"
    		}
    	},
    	saveAndClose: {
    		caption: "儲存並關閉"
    	},
    	saveDraft: {
    		caption: "草稿",
    		dialogTitle: "儲存本機草稿"
    	},
    	del: {
    		caption: "刪除",
    		dialogTitle: "刪除中繼資料",
    		prompt: "確定要刪除此中繼資料？",
    		working: "正在刪除中繼資料...",
    		errorDeleting: "發生錯誤，您的中繼資料並未刪除。"
    	},
    	transform: {
    		caption: "轉換",
    		dialogTitle: "轉換成",
    		prompt: "",
    		working: "正在轉換...",
    		errorTransforming: "在轉換文件時發生錯誤。"
    	},
    	errorDialog: {
    		dialogTitle: "存在一個錯誤"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "中繼資料"
      	}
      }
    },
    
  	calendar: {
  		button: "行事曆...",
  		title: "行事曆"
  	},
    
  	geoExtent: {
  		button: "設定地理範圍...",
  		title: "地理範圍",
  		navigate: "導航",
  		draw: "畫一個長方形",
  		drawHint: "壓下以開始，鬆開以完成。"
  	},
  	
    hints: {
    	date: "(年或年月或年月日)",
    	dateTime: "(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",
    	dateOrDateTime: "(年或年月或年月日或 yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",
    	delimitedTextArea: "(使用逗號或新的一行以區隔)",
    	fgdcDate: "(年或年月或年月日)",
    	fgdcTime: "(hh:mm:ss.sss[+-]hh:mm)",
    	integer: "(輸入整數)",
    	latitude: "(十進制度)",
    	longitude: "(十進制度)",
    	number: "(輸入數字)",
    	numberGreaterThanZero: "(輸入 > 0 的數字)"
    },
    
    isoTopicCategoryCode: {
    	caption: "主題類別",
    	boundaries: "行政與政治邊界",
    	farming: "農業與耕種",
    	climatologyMeteorologyAtmosphere: "大氣與氣候",
    	biota: "生物學和生態學",
    	economy: "商業與經濟",
    	planningCadastre: "地籍圖",
    	society: "文化、社會與人口統計學",
    	elevation: "海拔與衍生產品",
    	environment: "環境與保育",
    	structure: "設施與結構",
    	geoscientificInformation: "地質及地球物理",
    	health: "人類健康與疾病",
    	imageryBaseMapsEarthCover: "影像與底圖",
    	inlandWaters: "內陸水域資源",
    	location: "地點與測量網路",
    	intelligenceMilitary: "軍事",
    	oceans: "海洋與河口",
    	transportation: "交通網路",
    	utilitiesCommunication: "公用事業與通訊"
    },
    
    multiplicity: {
    	moveElementDown: "把章節往下移",
    	moveElementUp: "把章節往上移",
    	removeElement: "移除章節",
    	repeatElement: "重複章節"
    },
    
    serviceTypes: {
  		featureService: "圖徵服務",
  		mapService: "地圖服務",
  		imageService: "影像服務",
  		wms: "WMS",
  		wfs: "WFS",
  		wcs: "WCS"
    },
    
    validation: {
    	pattern: "{label} - {message}",
    	patternWithHint: "{label} - {message} {hint}",
	    ok: "確定",
	    empty: "需要一個值。",
	    date: "該值必須是日期。",
	    integer: "該值必須是整數。",
	    number: "該值必須是數字。",
	    other: "無效值。"
    },
    
    validationPane: {
    	clearMessages: "清除訊息"
    }
    
  })
);
