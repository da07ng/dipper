define(
   ({
  	
    general: {
      cancel: "Storno",
      close: "Zavřít",
    	none: "Ř_None__ů",
    	ok: "Ř_OK__ů",
    	other: "Ř_Other___ů",
    	stamp: "Ř_Stamp___ů"
    },
    
    editor: {
      noMetadata: "Této položce chybí metadata.",
    	xmlViewOnly: "Ř_This type of metadata can only be viewed as an XML________________ů.",
    	editorDialog: {
    		caption: "Ř_Metadata___ů",
    		captionPattern: "Ř_Metadata for {title}_______ů"
    	},
    	primaryToolbar: {
    		view: "Ř_View__ů",
    		viewXml: "Ř_View XML___ů",
    		edit: "Ř_Edit__ů",
    		initializing: "Ř_Loading____ů...",
    		startingEditor: "Ř_Starting editor______ů...",
    		loadingDocument: "Ř_Loading document_______ů...",
    		updatingDocument: "Ř_Updating document_______ů...",
    		generatingView: "Ř_Generating view______ů...",
    		errors: {
    			errorGeneratingView: "Ř_An error occurred while generating the view______________ů.",
    			errorLoadingDocument: "Ř_An error occurred while loading the document_______________ů."
    		}
    	},
    	changesNotSaved: {
    		prompt: "Ř_Your document has changes that have not been saved________________ů.",
    		dialogTitle: "Ř_Close Metadata Editor_______ů",
    		closeButton: "Ř_Discard & Close______ů"
    	},
    	download: {
    		caption: "Ř_Download___ů",
    		dialogTitle: "Ř_Download___ů",
    		prompt: "Ř_Click here to download your file___________ů."
    	},
    	load: {
    		caption: "Ř_Load__ů",
    		dialogTitle: "Ř_Load Metadata_____ů",
    		typeTab: "Ř_A Type___ů",
    		fileTab: "Ř_A File___ů",
    		templateTab: "Ř_A Template____ů",
    		itemTab: "Ř_Your Item____ů",
    		filePrompt: "Ř_Select a local XML file________ů:",
    		templatePrompt: "Ř_Select a local XML file (key properties will be updated)__________________ů:",
    		pullItem: "Ř_Update metadata with key properties of your item________________ů.",
    		importWarning: "Ř_The selected file did not match a supported format________________ů.",
    		loading: "Ř_Loading____ů...",
    		noMetadata: "Ř_Metadata can be created for this item by choosing one of the following options_________________________ů.",
    		unrecognizedMetadata: "Ř_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ů.",
    		errorLoading: "Ř_There was an error while loading___________ů.",
    		warnings: {
    			badFile: "Ř_The selected file could not be loaded____________ů.",
    			notAnXml: "Ř_The selected file is not an XML file____________ů.",
    			notSupported: "Ř_This type of file is not supported____________ů."
    		}
    	},
    	save: {
    		caption: "Ř_Save__ů",
    		dialogTitle: "Ř_Save Metadata_____ů",
    		working: "Ř_Saving metadata______ů...",
    		errorSaving: "Ř_An error occurred, your metadata was not saved_______________ů.",
    		saveDialog: {
    			pushCaption: "Ř_Apply changes to your item_________ů"
    		}
    	},
    	saveAndClose: {
    		caption: "Ř_Save & Close_____ů"
    	},
    	saveDraft: {
    		caption: "Ř_Draft___ů",
    		dialogTitle: "Ř_Save a Local Draft______ů"
    	},
    	del: {
    		caption: "Ř_Delete___ů",
    		dialogTitle: "Ř_Delete Metadata______ů",
    		prompt: "Ř_Are you sure you want to delete this metadata_______________ů?",
    		working: "Ř_Deleting metadata_______ů...",
    		errorDeleting: "Ř_An error occurred, your metadata was not deleted________________ů."
    	},
    	transform: {
    		caption: "Ř_Transform____ů",
    		dialogTitle: "Ř_Transform To_____ů",
    		prompt: "",
    		working: "Ř_Transforming______ů...",
    		errorTransforming: "Ř_An error occurred while transforming your document________________ů."
    	},
    	errorDialog: {
    		dialogTitle: "Ř_There was an error______ů"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "Ř_Metadata___ů"
      	}
      }
    },
    
  	calendar: {
  		button: "Ř_Calendar____ů...",
  		title: "Ř_Calendar___ů"
  	},
    
  	geoExtent: {
  		button: "Ř_Set Geographic Extent________ů...",
  		title: "Ř_Geographic Extent______ů",
  		navigate: "Ř_Navigate___ů",
  		draw: "Ř_Draw a Rectangle______ů",
  		drawHint: "Ř_Press down to start and let go to finish_____________ů."
  	},
  	
    hints: {
    	date: "Ř_(yyyy or yyyy-mm or yyyy-mm-dd)__________ů",
    	dateTime: "Ř_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ů",
    	dateOrDateTime: "Ř_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ů",
    	delimitedTextArea: "Ř_(use comma or newline to separate)___________ů",
    	fgdcDate: "Ř_(yyyy or yyyy-mm or yyyy-mm-dd)__________ů",
    	fgdcTime: "Ř_(hh:mm:ss.sss[+-]hh:mm)________ů",
    	integer: "Ř_(enter an integer)______ů",
    	latitude: "Ř_(decimal degrees)______ů",
    	longitude: "Ř_(decimal degrees)______ů",
    	number: "Ř_(enter a number)______ů",
    	numberGreaterThanZero: "Ř_(enter a number > 0)_______ů"
    },
    
    isoTopicCategoryCode: {
    	caption: "Ř_Topic Category_____ů",
    	boundaries: "Ř_Administrative and Political Boundaries_____________ů",
    	farming: "Ř_Agriculture and Farming________ů",
    	climatologyMeteorologyAtmosphere: "Ř_Atmosphere and Climatic________ů",
    	biota: "Ř_Biology and Ecology_______ů",
    	economy: "Ř_Business and Economic_______ů",
    	planningCadastre: "Ř_Cadastral____ů",
    	society: "Ř_Cultural, Society and Demography___________ů",
    	elevation: "Ř_Elevation and Derived Products__________ů",
    	environment: "Ř_Environment and Conservation_________ů",
    	structure: "Ř_Facilities and Structures_________ů",
    	geoscientificInformation: "Ř_Geological and Geophysical_________ů",
    	health: "Ř_Human Health and Disease________ů",
    	imageryBaseMapsEarthCover: "Ř_Imagery and Base Maps_______ů",
    	inlandWaters: "Ř_Inland Water Resources________ů",
    	location: "Ř_Locations and Geodetic Networks__________ů",
    	intelligenceMilitary: "Ř_Military___ů",
    	oceans: "Ř_Oceans and Estuaries_______ů",
    	transportation: "Ř_Transportation Networks________ů",
    	utilitiesCommunication: "Ř_Utilities and Communication_________ů"
    },
    
    multiplicity: {
    	moveElementDown: "Ř_Move Section Down______ů",
    	moveElementUp: "Ř_Move Section Up______ů",
    	removeElement: "Ř_Remove Section_____ů",
    	repeatElement: "Ř_Repeat Section_____ů"
    },
    
    serviceTypes: {
  		featureService: "Ř_Feature Service______ů",
  		mapService: "Ř_Map Service____ů",
  		imageService: "Ř_Image Service_____ů",
  		wms: "Ř_WMS__ů",
  		wfs: "Ř_WFS__ů",
  		wcs: "Ř_WCS__ů"
    },
    
    validation: {
    	pattern: "Ř_{label} - {message}_______ů",
    	patternWithHint: "Ř_{label} - {message} {hint}_________ů",
	    ok: "Ř_OK__ů",
	    empty: "Ř_A value is required_______ů.",
	    date: "Ř_The value must be a date_________ů.",
	    integer: "Ř_The value must be an integer__________ů.",
	    number: "Ř_The value must be an number_________ů.",
	    other: "Ř_Invalid value_____ů."
    },
    
    validationPane: {
    	clearMessages: "Ř_Clear Messages_____ů"
    }
    
  })
);
