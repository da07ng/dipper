define(
   ({
  	
    general: {
      cancel: "İptal",
      close: "Kapat",
    	none: "ı_None__İ",
    	ok: "ı_OK__İ",
    	other: "ı_Other___İ",
    	stamp: "ı_Stamp___İ"
    },
    
    editor: {
      noMetadata: "Bu öğe için meta veri yok.",
    	xmlViewOnly: "ı_This type of metadata can only be viewed as an XML________________İ.",
    	editorDialog: {
    		caption: "ı_Metadata___İ",
    		captionPattern: "ı_Metadata for {title}_______İ"
    	},
    	primaryToolbar: {
    		view: "ı_View__İ",
    		viewXml: "ı_View XML___İ",
    		edit: "ı_Edit__İ",
    		initializing: "ı_Loading____İ...",
    		startingEditor: "ı_Starting editor______İ...",
    		loadingDocument: "ı_Loading document_______İ...",
    		updatingDocument: "ı_Updating document_______İ...",
    		generatingView: "ı_Generating view______İ...",
    		errors: {
    			errorGeneratingView: "ı_An error occurred while generating the view______________İ.",
    			errorLoadingDocument: "ı_An error occurred while loading the document_______________İ."
    		}
    	},
    	changesNotSaved: {
    		prompt: "ı_Your document has changes that have not been saved________________İ.",
    		dialogTitle: "ı_Close Metadata Editor_______İ",
    		closeButton: "ı_Discard & Close______İ"
    	},
    	download: {
    		caption: "ı_Download___İ",
    		dialogTitle: "ı_Download___İ",
    		prompt: "ı_Click here to download your file___________İ."
    	},
    	load: {
    		caption: "ı_Load__İ",
    		dialogTitle: "ı_Load Metadata_____İ",
    		typeTab: "ı_A Type___İ",
    		fileTab: "ı_A File___İ",
    		templateTab: "ı_A Template____İ",
    		itemTab: "ı_Your Item____İ",
    		filePrompt: "ı_Select a local XML file________İ:",
    		templatePrompt: "ı_Select a local XML file (key properties will be updated)__________________İ:",
    		pullItem: "ı_Update metadata with key properties of your item________________İ.",
    		importWarning: "ı_The selected file did not match a supported format________________İ.",
    		loading: "ı_Loading____İ...",
    		noMetadata: "ı_Metadata can be created for this item by choosing one of the following options_________________________İ.",
    		unrecognizedMetadata: "ı_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________İ.",
    		errorLoading: "ı_There was an error while loading___________İ.",
    		warnings: {
    			badFile: "ı_The selected file could not be loaded____________İ.",
    			notAnXml: "ı_The selected file is not an XML file____________İ.",
    			notSupported: "ı_This type of file is not supported____________İ."
    		}
    	},
    	save: {
    		caption: "ı_Save__İ",
    		dialogTitle: "ı_Save Metadata_____İ",
    		working: "ı_Saving metadata______İ...",
    		errorSaving: "ı_An error occurred, your metadata was not saved_______________İ.",
    		saveDialog: {
    			pushCaption: "ı_Apply changes to your item_________İ"
    		}
    	},
    	saveAndClose: {
    		caption: "ı_Save & Close_____İ"
    	},
    	saveDraft: {
    		caption: "ı_Draft___İ",
    		dialogTitle: "ı_Save a Local Draft______İ"
    	},
    	del: {
    		caption: "ı_Delete___İ",
    		dialogTitle: "ı_Delete Metadata______İ",
    		prompt: "ı_Are you sure you want to delete this metadata_______________İ?",
    		working: "ı_Deleting metadata_______İ...",
    		errorDeleting: "ı_An error occurred, your metadata was not deleted________________İ."
    	},
    	transform: {
    		caption: "ı_Transform____İ",
    		dialogTitle: "ı_Transform To_____İ",
    		prompt: "",
    		working: "ı_Transforming______İ...",
    		errorTransforming: "ı_An error occurred while transforming your document________________İ."
    	},
    	errorDialog: {
    		dialogTitle: "ı_There was an error______İ"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "ı_Metadata___İ"
      	}
      }
    },
    
  	calendar: {
  		button: "ı_Calendar____İ...",
  		title: "ı_Calendar___İ"
  	},
    
  	geoExtent: {
  		button: "ı_Set Geographic Extent________İ...",
  		title: "ı_Geographic Extent______İ",
  		navigate: "ı_Navigate___İ",
  		draw: "ı_Draw a Rectangle______İ",
  		drawHint: "ı_Press down to start and let go to finish_____________İ."
  	},
  	
    hints: {
    	date: "ı_(yyyy or yyyy-mm or yyyy-mm-dd)__________İ",
    	dateTime: "ı_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________İ",
    	dateOrDateTime: "ı_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________İ",
    	delimitedTextArea: "ı_(use comma or newline to separate)___________İ",
    	fgdcDate: "ı_(yyyy or yyyy-mm or yyyy-mm-dd)__________İ",
    	fgdcTime: "ı_(hh:mm:ss.sss[+-]hh:mm)________İ",
    	integer: "ı_(enter an integer)______İ",
    	latitude: "ı_(decimal degrees)______İ",
    	longitude: "ı_(decimal degrees)______İ",
    	number: "ı_(enter a number)______İ",
    	numberGreaterThanZero: "ı_(enter a number > 0)_______İ"
    },
    
    isoTopicCategoryCode: {
    	caption: "ı_Topic Category_____İ",
    	boundaries: "ı_Administrative and Political Boundaries_____________İ",
    	farming: "ı_Agriculture and Farming________İ",
    	climatologyMeteorologyAtmosphere: "ı_Atmosphere and Climatic________İ",
    	biota: "ı_Biology and Ecology_______İ",
    	economy: "ı_Business and Economic_______İ",
    	planningCadastre: "ı_Cadastral____İ",
    	society: "ı_Cultural, Society and Demography___________İ",
    	elevation: "ı_Elevation and Derived Products__________İ",
    	environment: "ı_Environment and Conservation_________İ",
    	structure: "ı_Facilities and Structures_________İ",
    	geoscientificInformation: "ı_Geological and Geophysical_________İ",
    	health: "ı_Human Health and Disease________İ",
    	imageryBaseMapsEarthCover: "ı_Imagery and Base Maps_______İ",
    	inlandWaters: "ı_Inland Water Resources________İ",
    	location: "ı_Locations and Geodetic Networks__________İ",
    	intelligenceMilitary: "ı_Military___İ",
    	oceans: "ı_Oceans and Estuaries_______İ",
    	transportation: "ı_Transportation Networks________İ",
    	utilitiesCommunication: "ı_Utilities and Communication_________İ"
    },
    
    multiplicity: {
    	moveElementDown: "ı_Move Section Down______İ",
    	moveElementUp: "ı_Move Section Up______İ",
    	removeElement: "ı_Remove Section_____İ",
    	repeatElement: "ı_Repeat Section_____İ"
    },
    
    serviceTypes: {
  		featureService: "ı_Feature Service______İ",
  		mapService: "ı_Map Service____İ",
  		imageService: "ı_Image Service_____İ",
  		wms: "ı_WMS__İ",
  		wfs: "ı_WFS__İ",
  		wcs: "ı_WCS__İ"
    },
    
    validation: {
    	pattern: "ı_{label} - {message}_______İ",
    	patternWithHint: "ı_{label} - {message} {hint}_________İ",
	    ok: "ı_OK__İ",
	    empty: "ı_A value is required_______İ.",
	    date: "ı_The value must be a date_________İ.",
	    integer: "ı_The value must be an integer__________İ.",
	    number: "ı_The value must be an number_________İ.",
	    other: "ı_Invalid value_____İ."
    },
    
    validationPane: {
    	clearMessages: "ı_Clear Messages_____İ"
    }
    
  })
);
