define(
   ({
  	
    general: {
      cancel: "取消",
      close: "关闭",
    	none: "试_None__验",
    	ok: "试_OK__验",
    	other: "试_Other___验",
    	stamp: "试_Stamp___验"
    },
    
    editor: {
      noMetadata: "此项目无元数据。",
    	xmlViewOnly: "试_This type of metadata can only be viewed as an XML________________验.",
    	editorDialog: {
    		caption: "试_Metadata___验",
    		captionPattern: "试_Metadata for {title}_______验"
    	},
    	primaryToolbar: {
    		view: "试_View__验",
    		viewXml: "试_View XML___验",
    		edit: "试_Edit__验",
    		initializing: "试_Loading____验...",
    		startingEditor: "试_Starting editor______验...",
    		loadingDocument: "试_Loading document_______验...",
    		updatingDocument: "试_Updating document_______验...",
    		generatingView: "试_Generating view______验...",
    		errors: {
    			errorGeneratingView: "试_An error occurred while generating the view______________验.",
    			errorLoadingDocument: "试_An error occurred while loading the document_______________验."
    		}
    	},
    	changesNotSaved: {
    		prompt: "试_Your document has changes that have not been saved________________验.",
    		dialogTitle: "试_Close Metadata Editor_______验",
    		closeButton: "试_Discard & Close______验"
    	},
    	download: {
    		caption: "试_Download___验",
    		dialogTitle: "试_Download___验",
    		prompt: "试_Click here to download your file___________验."
    	},
    	load: {
    		caption: "试_Load__验",
    		dialogTitle: "试_Load Metadata_____验",
    		typeTab: "试_A Type___验",
    		fileTab: "试_A File___验",
    		templateTab: "试_A Template____验",
    		itemTab: "试_Your Item____验",
    		filePrompt: "试_Select a local XML file________验:",
    		templatePrompt: "试_Select a local XML file (key properties will be updated)__________________验:",
    		pullItem: "试_Update metadata with key properties of your item________________验.",
    		importWarning: "试_The selected file did not match a supported format________________验.",
    		loading: "试_Loading____验...",
    		noMetadata: "试_Metadata can be created for this item by choosing one of the following options_________________________验.",
    		unrecognizedMetadata: "试_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________验.",
    		errorLoading: "试_There was an error while loading___________验.",
    		warnings: {
    			badFile: "试_The selected file could not be loaded____________验.",
    			notAnXml: "试_The selected file is not an XML file____________验.",
    			notSupported: "试_This type of file is not supported____________验."
    		}
    	},
    	save: {
    		caption: "试_Save__验",
    		dialogTitle: "试_Save Metadata_____验",
    		working: "试_Saving metadata______验...",
    		errorSaving: "试_An error occurred, your metadata was not saved_______________验.",
    		saveDialog: {
    			pushCaption: "试_Apply changes to your item_________验"
    		}
    	},
    	saveAndClose: {
    		caption: "试_Save & Close_____验"
    	},
    	saveDraft: {
    		caption: "试_Draft___验",
    		dialogTitle: "试_Save a Local Draft______验"
    	},
    	del: {
    		caption: "试_Delete___验",
    		dialogTitle: "试_Delete Metadata______验",
    		prompt: "试_Are you sure you want to delete this metadata_______________验?",
    		working: "试_Deleting metadata_______验...",
    		errorDeleting: "试_An error occurred, your metadata was not deleted________________验."
    	},
    	transform: {
    		caption: "试_Transform____验",
    		dialogTitle: "试_Transform To_____验",
    		prompt: "",
    		working: "试_Transforming______验...",
    		errorTransforming: "试_An error occurred while transforming your document________________验."
    	},
    	errorDialog: {
    		dialogTitle: "试_There was an error______验"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "试_Metadata___验"
      	}
      }
    },
    
  	calendar: {
  		button: "试_Calendar____验...",
  		title: "试_Calendar___验"
  	},
    
  	geoExtent: {
  		button: "试_Set Geographic Extent________验...",
  		title: "试_Geographic Extent______验",
  		navigate: "试_Navigate___验",
  		draw: "试_Draw a Rectangle______验",
  		drawHint: "试_Press down to start and let go to finish_____________验."
  	},
  	
    hints: {
    	date: "试_(yyyy or yyyy-mm or yyyy-mm-dd)__________验",
    	dateTime: "试_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________验",
    	dateOrDateTime: "试_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________验",
    	delimitedTextArea: "试_(use comma or newline to separate)___________验",
    	fgdcDate: "试_(yyyy or yyyy-mm or yyyy-mm-dd)__________验",
    	fgdcTime: "试_(hh:mm:ss.sss[+-]hh:mm)________验",
    	integer: "试_(enter an integer)______验",
    	latitude: "试_(decimal degrees)______验",
    	longitude: "试_(decimal degrees)______验",
    	number: "试_(enter a number)______验",
    	numberGreaterThanZero: "试_(enter a number > 0)_______验"
    },
    
    isoTopicCategoryCode: {
    	caption: "试_Topic Category_____验",
    	boundaries: "试_Administrative and Political Boundaries_____________验",
    	farming: "试_Agriculture and Farming________验",
    	climatologyMeteorologyAtmosphere: "试_Atmosphere and Climatic________验",
    	biota: "试_Biology and Ecology_______验",
    	economy: "试_Business and Economic_______验",
    	planningCadastre: "试_Cadastral____验",
    	society: "试_Cultural, Society and Demography___________验",
    	elevation: "试_Elevation and Derived Products__________验",
    	environment: "试_Environment and Conservation_________验",
    	structure: "试_Facilities and Structures_________验",
    	geoscientificInformation: "试_Geological and Geophysical_________验",
    	health: "试_Human Health and Disease________验",
    	imageryBaseMapsEarthCover: "试_Imagery and Base Maps_______验",
    	inlandWaters: "试_Inland Water Resources________验",
    	location: "试_Locations and Geodetic Networks__________验",
    	intelligenceMilitary: "试_Military___验",
    	oceans: "试_Oceans and Estuaries_______验",
    	transportation: "试_Transportation Networks________验",
    	utilitiesCommunication: "试_Utilities and Communication_________验"
    },
    
    multiplicity: {
    	moveElementDown: "试_Move Section Down______验",
    	moveElementUp: "试_Move Section Up______验",
    	removeElement: "试_Remove Section_____验",
    	repeatElement: "试_Repeat Section_____验"
    },
    
    serviceTypes: {
  		featureService: "试_Feature Service______验",
  		mapService: "试_Map Service____验",
  		imageService: "试_Image Service_____验",
  		wms: "试_WMS__验",
  		wfs: "试_WFS__验",
  		wcs: "试_WCS__验"
    },
    
    validation: {
    	pattern: "试_{label} - {message}_______验",
    	patternWithHint: "试_{label} - {message} {hint}_________验",
	    ok: "试_OK__验",
	    empty: "试_A value is required_______验.",
	    date: "试_The value must be a date_________验.",
	    integer: "试_The value must be an integer__________验.",
	    number: "试_The value must be an number_________验.",
	    other: "试_Invalid value_____验."
    },
    
    validationPane: {
    	clearMessages: "试_Clear Messages_____验"
    }
    
  })
);
