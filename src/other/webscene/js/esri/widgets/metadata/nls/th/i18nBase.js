define(
   ({
  	
    general: {
      cancel: "ยกเลิก",
      close: "ปิด",
    	none: "ก้_None__ษฺ",
    	ok: "ก้_OK__ษฺ",
    	other: "ก้_Other___ษฺ",
    	stamp: "ก้_Stamp___ษฺ"
    },
    
    editor: {
      noMetadata: "ไม่มีข้อมูลที่ใช้แสดงรายละเอียด (เมตาดาต้า) สำหรับไอเท็มนี้",
    	xmlViewOnly: "ก้_This type of metadata can only be viewed as an XML________________ษฺ.",
    	editorDialog: {
    		caption: "ก้_Metadata___ษฺ",
    		captionPattern: "ก้_Metadata for {title}_______ษฺ"
    	},
    	primaryToolbar: {
    		view: "ก้_View__ษฺ",
    		viewXml: "ก้_View XML___ษฺ",
    		edit: "ก้_Edit__ษฺ",
    		initializing: "ก้_Loading____ษฺ...",
    		startingEditor: "ก้_Starting editor______ษฺ...",
    		loadingDocument: "ก้_Loading document_______ษฺ...",
    		updatingDocument: "ก้_Updating document_______ษฺ...",
    		generatingView: "ก้_Generating view______ษฺ...",
    		errors: {
    			errorGeneratingView: "ก้_An error occurred while generating the view______________ษฺ.",
    			errorLoadingDocument: "ก้_An error occurred while loading the document_______________ษฺ."
    		}
    	},
    	changesNotSaved: {
    		prompt: "ก้_Your document has changes that have not been saved________________ษฺ.",
    		dialogTitle: "ก้_Close Metadata Editor_______ษฺ",
    		closeButton: "ก้_Discard & Close______ษฺ"
    	},
    	download: {
    		caption: "ก้_Download___ษฺ",
    		dialogTitle: "ก้_Download___ษฺ",
    		prompt: "ก้_Click here to download your file___________ษฺ."
    	},
    	load: {
    		caption: "ก้_Load__ษฺ",
    		dialogTitle: "ก้_Load Metadata_____ษฺ",
    		typeTab: "ก้_A Type___ษฺ",
    		fileTab: "ก้_A File___ษฺ",
    		templateTab: "ก้_A Template____ษฺ",
    		itemTab: "ก้_Your Item____ษฺ",
    		filePrompt: "ก้_Select a local XML file________ษฺ:",
    		templatePrompt: "ก้_Select a local XML file (key properties will be updated)__________________ษฺ:",
    		pullItem: "ก้_Update metadata with key properties of your item________________ษฺ.",
    		importWarning: "ก้_The selected file did not match a supported format________________ษฺ.",
    		loading: "ก้_Loading____ษฺ...",
    		noMetadata: "ก้_Metadata can be created for this item by choosing one of the following options_________________________ษฺ.",
    		unrecognizedMetadata: "ก้_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ษฺ.",
    		errorLoading: "ก้_There was an error while loading___________ษฺ.",
    		warnings: {
    			badFile: "ก้_The selected file could not be loaded____________ษฺ.",
    			notAnXml: "ก้_The selected file is not an XML file____________ษฺ.",
    			notSupported: "ก้_This type of file is not supported____________ษฺ."
    		}
    	},
    	save: {
    		caption: "ก้_Save__ษฺ",
    		dialogTitle: "ก้_Save Metadata_____ษฺ",
    		working: "ก้_Saving metadata______ษฺ...",
    		errorSaving: "ก้_An error occurred, your metadata was not saved_______________ษฺ.",
    		saveDialog: {
    			pushCaption: "ก้_Apply changes to your item_________ษฺ"
    		}
    	},
    	saveAndClose: {
    		caption: "ก้_Save & Close_____ษฺ"
    	},
    	saveDraft: {
    		caption: "ก้_Draft___ษฺ",
    		dialogTitle: "ก้_Save a Local Draft______ษฺ"
    	},
    	del: {
    		caption: "ก้_Delete___ษฺ",
    		dialogTitle: "ก้_Delete Metadata______ษฺ",
    		prompt: "ก้_Are you sure you want to delete this metadata_______________ษฺ?",
    		working: "ก้_Deleting metadata_______ษฺ...",
    		errorDeleting: "ก้_An error occurred, your metadata was not deleted________________ษฺ."
    	},
    	transform: {
    		caption: "ก้_Transform____ษฺ",
    		dialogTitle: "ก้_Transform To_____ษฺ",
    		prompt: "",
    		working: "ก้_Transforming______ษฺ...",
    		errorTransforming: "ก้_An error occurred while transforming your document________________ษฺ."
    	},
    	errorDialog: {
    		dialogTitle: "ก้_There was an error______ษฺ"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "ก้_Metadata___ษฺ"
      	}
      }
    },
    
  	calendar: {
  		button: "ก้_Calendar____ษฺ...",
  		title: "ก้_Calendar___ษฺ"
  	},
    
  	geoExtent: {
  		button: "ก้_Set Geographic Extent________ษฺ...",
  		title: "ก้_Geographic Extent______ษฺ",
  		navigate: "ก้_Navigate___ษฺ",
  		draw: "ก้_Draw a Rectangle______ษฺ",
  		drawHint: "ก้_Press down to start and let go to finish_____________ษฺ."
  	},
  	
    hints: {
    	date: "ก้_(yyyy or yyyy-mm or yyyy-mm-dd)__________ษฺ",
    	dateTime: "ก้_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ษฺ",
    	dateOrDateTime: "ก้_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ษฺ",
    	delimitedTextArea: "ก้_(use comma or newline to separate)___________ษฺ",
    	fgdcDate: "ก้_(yyyy or yyyy-mm or yyyy-mm-dd)__________ษฺ",
    	fgdcTime: "ก้_(hh:mm:ss.sss[+-]hh:mm)________ษฺ",
    	integer: "ก้_(enter an integer)______ษฺ",
    	latitude: "ก้_(decimal degrees)______ษฺ",
    	longitude: "ก้_(decimal degrees)______ษฺ",
    	number: "ก้_(enter a number)______ษฺ",
    	numberGreaterThanZero: "ก้_(enter a number > 0)_______ษฺ"
    },
    
    isoTopicCategoryCode: {
    	caption: "ก้_Topic Category_____ษฺ",
    	boundaries: "ก้_Administrative and Political Boundaries_____________ษฺ",
    	farming: "ก้_Agriculture and Farming________ษฺ",
    	climatologyMeteorologyAtmosphere: "ก้_Atmosphere and Climatic________ษฺ",
    	biota: "ก้_Biology and Ecology_______ษฺ",
    	economy: "ก้_Business and Economic_______ษฺ",
    	planningCadastre: "ก้_Cadastral____ษฺ",
    	society: "ก้_Cultural, Society and Demography___________ษฺ",
    	elevation: "ก้_Elevation and Derived Products__________ษฺ",
    	environment: "ก้_Environment and Conservation_________ษฺ",
    	structure: "ก้_Facilities and Structures_________ษฺ",
    	geoscientificInformation: "ก้_Geological and Geophysical_________ษฺ",
    	health: "ก้_Human Health and Disease________ษฺ",
    	imageryBaseMapsEarthCover: "ก้_Imagery and Base Maps_______ษฺ",
    	inlandWaters: "ก้_Inland Water Resources________ษฺ",
    	location: "ก้_Locations and Geodetic Networks__________ษฺ",
    	intelligenceMilitary: "ก้_Military___ษฺ",
    	oceans: "ก้_Oceans and Estuaries_______ษฺ",
    	transportation: "ก้_Transportation Networks________ษฺ",
    	utilitiesCommunication: "ก้_Utilities and Communication_________ษฺ"
    },
    
    multiplicity: {
    	moveElementDown: "ก้_Move Section Down______ษฺ",
    	moveElementUp: "ก้_Move Section Up______ษฺ",
    	removeElement: "ก้_Remove Section_____ษฺ",
    	repeatElement: "ก้_Repeat Section_____ษฺ"
    },
    
    serviceTypes: {
  		featureService: "ก้_Feature Service______ษฺ",
  		mapService: "ก้_Map Service____ษฺ",
  		imageService: "ก้_Image Service_____ษฺ",
  		wms: "ก้_WMS__ษฺ",
  		wfs: "ก้_WFS__ษฺ",
  		wcs: "ก้_WCS__ษฺ"
    },
    
    validation: {
    	pattern: "ก้_{label} - {message}_______ษฺ",
    	patternWithHint: "ก้_{label} - {message} {hint}_________ษฺ",
	    ok: "ก้_OK__ษฺ",
	    empty: "ก้_A value is required_______ษฺ.",
	    date: "ก้_The value must be a date_________ษฺ.",
	    integer: "ก้_The value must be an integer__________ษฺ.",
	    number: "ก้_The value must be an number_________ษฺ.",
	    other: "ก้_Invalid value_____ษฺ."
    },
    
    validationPane: {
    	clearMessages: "ก้_Clear Messages_____ษฺ"
    }
    
  })
);
