define(
   ({
  	
    general: {
      cancel: "Hủy",
      close: "Đóng",
    	none: "Đ_None__ớ",
    	ok: "Đ_OK__ớ",
    	other: "Đ_Other___ớ",
    	stamp: "Đ_Stamp___ớ"
    },
    
    editor: {
      noMetadata: "Không có mô tả dữ liệu cho mục này.",
    	xmlViewOnly: "Đ_This type of metadata can only be viewed as an XML________________ớ.",
    	editorDialog: {
    		caption: "Đ_Metadata___ớ",
    		captionPattern: "Đ_Metadata for {title}_______ớ"
    	},
    	primaryToolbar: {
    		view: "Đ_View__ớ",
    		viewXml: "Đ_View XML___ớ",
    		edit: "Đ_Edit__ớ",
    		initializing: "Đ_Loading____ớ...",
    		startingEditor: "Đ_Starting editor______ớ...",
    		loadingDocument: "Đ_Loading document_______ớ...",
    		updatingDocument: "Đ_Updating document_______ớ...",
    		generatingView: "Đ_Generating view______ớ...",
    		errors: {
    			errorGeneratingView: "Đ_An error occurred while generating the view______________ớ.",
    			errorLoadingDocument: "Đ_An error occurred while loading the document_______________ớ."
    		}
    	},
    	changesNotSaved: {
    		prompt: "Đ_Your document has changes that have not been saved________________ớ.",
    		dialogTitle: "Đ_Close Metadata Editor_______ớ",
    		closeButton: "Đ_Discard & Close______ớ"
    	},
    	download: {
    		caption: "Đ_Download___ớ",
    		dialogTitle: "Đ_Download___ớ",
    		prompt: "Đ_Click here to download your file___________ớ."
    	},
    	load: {
    		caption: "Đ_Load__ớ",
    		dialogTitle: "Đ_Load Metadata_____ớ",
    		typeTab: "Đ_A Type___ớ",
    		fileTab: "Đ_A File___ớ",
    		templateTab: "Đ_A Template____ớ",
    		itemTab: "Đ_Your Item____ớ",
    		filePrompt: "Đ_Select a local XML file________ớ:",
    		templatePrompt: "Đ_Select a local XML file (key properties will be updated)__________________ớ:",
    		pullItem: "Đ_Update metadata with key properties of your item________________ớ.",
    		importWarning: "Đ_The selected file did not match a supported format________________ớ.",
    		loading: "Đ_Loading____ớ...",
    		noMetadata: "Đ_Metadata can be created for this item by choosing one of the following options_________________________ớ.",
    		unrecognizedMetadata: "Đ_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ớ.",
    		errorLoading: "Đ_There was an error while loading___________ớ.",
    		warnings: {
    			badFile: "Đ_The selected file could not be loaded____________ớ.",
    			notAnXml: "Đ_The selected file is not an XML file____________ớ.",
    			notSupported: "Đ_This type of file is not supported____________ớ."
    		}
    	},
    	save: {
    		caption: "Đ_Save__ớ",
    		dialogTitle: "Đ_Save Metadata_____ớ",
    		working: "Đ_Saving metadata______ớ...",
    		errorSaving: "Đ_An error occurred, your metadata was not saved_______________ớ.",
    		saveDialog: {
    			pushCaption: "Đ_Apply changes to your item_________ớ"
    		}
    	},
    	saveAndClose: {
    		caption: "Đ_Save & Close_____ớ"
    	},
    	saveDraft: {
    		caption: "Đ_Draft___ớ",
    		dialogTitle: "Đ_Save a Local Draft______ớ"
    	},
    	del: {
    		caption: "Đ_Delete___ớ",
    		dialogTitle: "Đ_Delete Metadata______ớ",
    		prompt: "Đ_Are you sure you want to delete this metadata_______________ớ?",
    		working: "Đ_Deleting metadata_______ớ...",
    		errorDeleting: "Đ_An error occurred, your metadata was not deleted________________ớ."
    	},
    	transform: {
    		caption: "Đ_Transform____ớ",
    		dialogTitle: "Đ_Transform To_____ớ",
    		prompt: "",
    		working: "Đ_Transforming______ớ...",
    		errorTransforming: "Đ_An error occurred while transforming your document________________ớ."
    	},
    	errorDialog: {
    		dialogTitle: "Đ_There was an error______ớ"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "Đ_Metadata___ớ"
      	}
      }
    },
    
  	calendar: {
  		button: "Đ_Calendar____ớ...",
  		title: "Đ_Calendar___ớ"
  	},
    
  	geoExtent: {
  		button: "Đ_Set Geographic Extent________ớ...",
  		title: "Đ_Geographic Extent______ớ",
  		navigate: "Đ_Navigate___ớ",
  		draw: "Đ_Draw a Rectangle______ớ",
  		drawHint: "Đ_Press down to start and let go to finish_____________ớ."
  	},
  	
    hints: {
    	date: "Đ_(yyyy or yyyy-mm or yyyy-mm-dd)__________ớ",
    	dateTime: "Đ_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ớ",
    	dateOrDateTime: "Đ_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ớ",
    	delimitedTextArea: "Đ_(use comma or newline to separate)___________ớ",
    	fgdcDate: "Đ_(yyyy or yyyy-mm or yyyy-mm-dd)__________ớ",
    	fgdcTime: "Đ_(hh:mm:ss.sss[+-]hh:mm)________ớ",
    	integer: "Đ_(enter an integer)______ớ",
    	latitude: "Đ_(decimal degrees)______ớ",
    	longitude: "Đ_(decimal degrees)______ớ",
    	number: "Đ_(enter a number)______ớ",
    	numberGreaterThanZero: "Đ_(enter a number > 0)_______ớ"
    },
    
    isoTopicCategoryCode: {
    	caption: "Đ_Topic Category_____ớ",
    	boundaries: "Đ_Administrative and Political Boundaries_____________ớ",
    	farming: "Đ_Agriculture and Farming________ớ",
    	climatologyMeteorologyAtmosphere: "Đ_Atmosphere and Climatic________ớ",
    	biota: "Đ_Biology and Ecology_______ớ",
    	economy: "Đ_Business and Economic_______ớ",
    	planningCadastre: "Đ_Cadastral____ớ",
    	society: "Đ_Cultural, Society and Demography___________ớ",
    	elevation: "Đ_Elevation and Derived Products__________ớ",
    	environment: "Đ_Environment and Conservation_________ớ",
    	structure: "Đ_Facilities and Structures_________ớ",
    	geoscientificInformation: "Đ_Geological and Geophysical_________ớ",
    	health: "Đ_Human Health and Disease________ớ",
    	imageryBaseMapsEarthCover: "Đ_Imagery and Base Maps_______ớ",
    	inlandWaters: "Đ_Inland Water Resources________ớ",
    	location: "Đ_Locations and Geodetic Networks__________ớ",
    	intelligenceMilitary: "Đ_Military___ớ",
    	oceans: "Đ_Oceans and Estuaries_______ớ",
    	transportation: "Đ_Transportation Networks________ớ",
    	utilitiesCommunication: "Đ_Utilities and Communication_________ớ"
    },
    
    multiplicity: {
    	moveElementDown: "Đ_Move Section Down______ớ",
    	moveElementUp: "Đ_Move Section Up______ớ",
    	removeElement: "Đ_Remove Section_____ớ",
    	repeatElement: "Đ_Repeat Section_____ớ"
    },
    
    serviceTypes: {
  		featureService: "Đ_Feature Service______ớ",
  		mapService: "Đ_Map Service____ớ",
  		imageService: "Đ_Image Service_____ớ",
  		wms: "Đ_WMS__ớ",
  		wfs: "Đ_WFS__ớ",
  		wcs: "Đ_WCS__ớ"
    },
    
    validation: {
    	pattern: "Đ_{label} - {message}_______ớ",
    	patternWithHint: "Đ_{label} - {message} {hint}_________ớ",
	    ok: "Đ_OK__ớ",
	    empty: "Đ_A value is required_______ớ.",
	    date: "Đ_The value must be a date_________ớ.",
	    integer: "Đ_The value must be an integer__________ớ.",
	    number: "Đ_The value must be an number_________ớ.",
	    other: "Đ_Invalid value_____ớ."
    },
    
    validationPane: {
    	clearMessages: "Đ_Clear Messages_____ớ"
    }
    
  })
);
