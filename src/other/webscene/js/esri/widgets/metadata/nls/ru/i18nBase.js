define(
   ({
  	
    general: {
      cancel: "Отменить",
      close: "Закрыть",
    	none: "Ж_None__Я",
    	ok: "Ж_OK__Я",
    	other: "Ж_Other___Я",
    	stamp: "Ж_Stamp___Я"
    },
    
    editor: {
      noMetadata: "Нет метаданных для этого элемента.",
    	xmlViewOnly: "Ж_This type of metadata can only be viewed as an XML________________Я.",
    	editorDialog: {
    		caption: "Ж_Metadata___Я",
    		captionPattern: "Ж_Metadata for {title}_______Я"
    	},
    	primaryToolbar: {
    		view: "Ж_View__Я",
    		viewXml: "Ж_View XML___Я",
    		edit: "Ж_Edit__Я",
    		initializing: "Ж_Loading____Я...",
    		startingEditor: "Ж_Starting editor______Я...",
    		loadingDocument: "Ж_Loading document_______Я...",
    		updatingDocument: "Ж_Updating document_______Я...",
    		generatingView: "Ж_Generating view______Я...",
    		errors: {
    			errorGeneratingView: "Ж_An error occurred while generating the view______________Я.",
    			errorLoadingDocument: "Ж_An error occurred while loading the document_______________Я."
    		}
    	},
    	changesNotSaved: {
    		prompt: "Ж_Your document has changes that have not been saved________________Я.",
    		dialogTitle: "Ж_Close Metadata Editor_______Я",
    		closeButton: "Ж_Discard & Close______Я"
    	},
    	download: {
    		caption: "Ж_Download___Я",
    		dialogTitle: "Ж_Download___Я",
    		prompt: "Ж_Click here to download your file___________Я."
    	},
    	load: {
    		caption: "Ж_Load__Я",
    		dialogTitle: "Ж_Load Metadata_____Я",
    		typeTab: "Ж_A Type___Я",
    		fileTab: "Ж_A File___Я",
    		templateTab: "Ж_A Template____Я",
    		itemTab: "Ж_Your Item____Я",
    		filePrompt: "Ж_Select a local XML file________Я:",
    		templatePrompt: "Ж_Select a local XML file (key properties will be updated)__________________Я:",
    		pullItem: "Ж_Update metadata with key properties of your item________________Я.",
    		importWarning: "Ж_The selected file did not match a supported format________________Я.",
    		loading: "Ж_Loading____Я...",
    		noMetadata: "Ж_Metadata can be created for this item by choosing one of the following options_________________________Я.",
    		unrecognizedMetadata: "Ж_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________Я.",
    		errorLoading: "Ж_There was an error while loading___________Я.",
    		warnings: {
    			badFile: "Ж_The selected file could not be loaded____________Я.",
    			notAnXml: "Ж_The selected file is not an XML file____________Я.",
    			notSupported: "Ж_This type of file is not supported____________Я."
    		}
    	},
    	save: {
    		caption: "Ж_Save__Я",
    		dialogTitle: "Ж_Save Metadata_____Я",
    		working: "Ж_Saving metadata______Я...",
    		errorSaving: "Ж_An error occurred, your metadata was not saved_______________Я.",
    		saveDialog: {
    			pushCaption: "Ж_Apply changes to your item_________Я"
    		}
    	},
    	saveAndClose: {
    		caption: "Ж_Save & Close_____Я"
    	},
    	saveDraft: {
    		caption: "Ж_Draft___Я",
    		dialogTitle: "Ж_Save a Local Draft______Я"
    	},
    	del: {
    		caption: "Ж_Delete___Я",
    		dialogTitle: "Ж_Delete Metadata______Я",
    		prompt: "Ж_Are you sure you want to delete this metadata_______________Я?",
    		working: "Ж_Deleting metadata_______Я...",
    		errorDeleting: "Ж_An error occurred, your metadata was not deleted________________Я."
    	},
    	transform: {
    		caption: "Ж_Transform____Я",
    		dialogTitle: "Ж_Transform To_____Я",
    		prompt: "",
    		working: "Ж_Transforming______Я...",
    		errorTransforming: "Ж_An error occurred while transforming your document________________Я."
    	},
    	errorDialog: {
    		dialogTitle: "Ж_There was an error______Я"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "Ж_Metadata___Я"
      	}
      }
    },
    
  	calendar: {
  		button: "Ж_Calendar____Я...",
  		title: "Ж_Calendar___Я"
  	},
    
  	geoExtent: {
  		button: "Ж_Set Geographic Extent________Я...",
  		title: "Ж_Geographic Extent______Я",
  		navigate: "Ж_Navigate___Я",
  		draw: "Ж_Draw a Rectangle______Я",
  		drawHint: "Ж_Press down to start and let go to finish_____________Я."
  	},
  	
    hints: {
    	date: "Ж_(yyyy or yyyy-mm or yyyy-mm-dd)__________Я",
    	dateTime: "Ж_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________Я",
    	dateOrDateTime: "Ж_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________Я",
    	delimitedTextArea: "Ж_(use comma or newline to separate)___________Я",
    	fgdcDate: "Ж_(yyyy or yyyy-mm or yyyy-mm-dd)__________Я",
    	fgdcTime: "Ж_(hh:mm:ss.sss[+-]hh:mm)________Я",
    	integer: "Ж_(enter an integer)______Я",
    	latitude: "Ж_(decimal degrees)______Я",
    	longitude: "Ж_(decimal degrees)______Я",
    	number: "Ж_(enter a number)______Я",
    	numberGreaterThanZero: "Ж_(enter a number > 0)_______Я"
    },
    
    isoTopicCategoryCode: {
    	caption: "Ж_Topic Category_____Я",
    	boundaries: "Ж_Administrative and Political Boundaries_____________Я",
    	farming: "Ж_Agriculture and Farming________Я",
    	climatologyMeteorologyAtmosphere: "Ж_Atmosphere and Climatic________Я",
    	biota: "Ж_Biology and Ecology_______Я",
    	economy: "Ж_Business and Economic_______Я",
    	planningCadastre: "Ж_Cadastral____Я",
    	society: "Ж_Cultural, Society and Demography___________Я",
    	elevation: "Ж_Elevation and Derived Products__________Я",
    	environment: "Ж_Environment and Conservation_________Я",
    	structure: "Ж_Facilities and Structures_________Я",
    	geoscientificInformation: "Ж_Geological and Geophysical_________Я",
    	health: "Ж_Human Health and Disease________Я",
    	imageryBaseMapsEarthCover: "Ж_Imagery and Base Maps_______Я",
    	inlandWaters: "Ж_Inland Water Resources________Я",
    	location: "Ж_Locations and Geodetic Networks__________Я",
    	intelligenceMilitary: "Ж_Military___Я",
    	oceans: "Ж_Oceans and Estuaries_______Я",
    	transportation: "Ж_Transportation Networks________Я",
    	utilitiesCommunication: "Ж_Utilities and Communication_________Я"
    },
    
    multiplicity: {
    	moveElementDown: "Ж_Move Section Down______Я",
    	moveElementUp: "Ж_Move Section Up______Я",
    	removeElement: "Ж_Remove Section_____Я",
    	repeatElement: "Ж_Repeat Section_____Я"
    },
    
    serviceTypes: {
  		featureService: "Ж_Feature Service______Я",
  		mapService: "Ж_Map Service____Я",
  		imageService: "Ж_Image Service_____Я",
  		wms: "Ж_WMS__Я",
  		wfs: "Ж_WFS__Я",
  		wcs: "Ж_WCS__Я"
    },
    
    validation: {
    	pattern: "Ж_{label} - {message}_______Я",
    	patternWithHint: "Ж_{label} - {message} {hint}_________Я",
	    ok: "Ж_OK__Я",
	    empty: "Ж_A value is required_______Я.",
	    date: "Ж_The value must be a date_________Я.",
	    integer: "Ж_The value must be an integer__________Я.",
	    number: "Ж_The value must be an number_________Я.",
	    other: "Ж_Invalid value_____Я."
    },
    
    validationPane: {
    	clearMessages: "Ж_Clear Messages_____Я"
    }
    
  })
);
