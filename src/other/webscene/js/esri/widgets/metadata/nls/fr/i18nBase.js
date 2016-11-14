define(
   ({
  	
    general: {
      cancel: "Annuler",
      close: "Fermer",
    	none: "æ_None__Â",
    	ok: "æ_OK__Â",
    	other: "æ_Other___Â",
    	stamp: "æ_Stamp___Â"
    },
    
    editor: {
      noMetadata: "Aucune métadonnée pour cet élément.",
    	xmlViewOnly: "æ_This type of metadata can only be viewed as an XML________________Â.",
    	editorDialog: {
    		caption: "æ_Metadata___Â",
    		captionPattern: "æ_Metadata for {title}_______Â"
    	},
    	primaryToolbar: {
    		view: "æ_View__Â",
    		viewXml: "æ_View XML___Â",
    		edit: "æ_Edit__Â",
    		initializing: "æ_Loading____Â...",
    		startingEditor: "æ_Starting editor______Â...",
    		loadingDocument: "æ_Loading document_______Â...",
    		updatingDocument: "æ_Updating document_______Â...",
    		generatingView: "æ_Generating view______Â...",
    		errors: {
    			errorGeneratingView: "æ_An error occurred while generating the view______________Â.",
    			errorLoadingDocument: "æ_An error occurred while loading the document_______________Â."
    		}
    	},
    	changesNotSaved: {
    		prompt: "æ_Your document has changes that have not been saved________________Â.",
    		dialogTitle: "æ_Close Metadata Editor_______Â",
    		closeButton: "æ_Discard & Close______Â"
    	},
    	download: {
    		caption: "æ_Download___Â",
    		dialogTitle: "æ_Download___Â",
    		prompt: "æ_Click here to download your file___________Â."
    	},
    	load: {
    		caption: "æ_Load__Â",
    		dialogTitle: "æ_Load Metadata_____Â",
    		typeTab: "æ_A Type___Â",
    		fileTab: "æ_A File___Â",
    		templateTab: "æ_A Template____Â",
    		itemTab: "æ_Your Item____Â",
    		filePrompt: "æ_Select a local XML file________Â:",
    		templatePrompt: "æ_Select a local XML file (key properties will be updated)__________________Â:",
    		pullItem: "æ_Update metadata with key properties of your item________________Â.",
    		importWarning: "æ_The selected file did not match a supported format________________Â.",
    		loading: "æ_Loading____Â...",
    		noMetadata: "æ_Metadata can be created for this item by choosing one of the following options_________________________Â.",
    		unrecognizedMetadata: "æ_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________Â.",
    		errorLoading: "æ_There was an error while loading___________Â.",
    		warnings: {
    			badFile: "æ_The selected file could not be loaded____________Â.",
    			notAnXml: "æ_The selected file is not an XML file____________Â.",
    			notSupported: "æ_This type of file is not supported____________Â."
    		}
    	},
    	save: {
    		caption: "æ_Save__Â",
    		dialogTitle: "æ_Save Metadata_____Â",
    		working: "æ_Saving metadata______Â...",
    		errorSaving: "æ_An error occurred, your metadata was not saved_______________Â.",
    		saveDialog: {
    			pushCaption: "æ_Apply changes to your item_________Â"
    		}
    	},
    	saveAndClose: {
    		caption: "æ_Save & Close_____Â"
    	},
    	saveDraft: {
    		caption: "æ_Draft___Â",
    		dialogTitle: "æ_Save a Local Draft______Â"
    	},
    	del: {
    		caption: "æ_Delete___Â",
    		dialogTitle: "æ_Delete Metadata______Â",
    		prompt: "æ_Are you sure you want to delete this metadata_______________Â?",
    		working: "æ_Deleting metadata_______Â...",
    		errorDeleting: "æ_An error occurred, your metadata was not deleted________________Â."
    	},
    	transform: {
    		caption: "æ_Transform____Â",
    		dialogTitle: "æ_Transform To_____Â",
    		prompt: "",
    		working: "æ_Transforming______Â...",
    		errorTransforming: "æ_An error occurred while transforming your document________________Â."
    	},
    	errorDialog: {
    		dialogTitle: "æ_There was an error______Â"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "æ_Metadata___Â"
      	}
      }
    },
    
  	calendar: {
  		button: "æ_Calendar____Â...",
  		title: "æ_Calendar___Â"
  	},
    
  	geoExtent: {
  		button: "æ_Set Geographic Extent________Â...",
  		title: "æ_Geographic Extent______Â",
  		navigate: "æ_Navigate___Â",
  		draw: "æ_Draw a Rectangle______Â",
  		drawHint: "æ_Press down to start and let go to finish_____________Â."
  	},
  	
    hints: {
    	date: "æ_(yyyy or yyyy-mm or yyyy-mm-dd)__________Â",
    	dateTime: "æ_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________Â",
    	dateOrDateTime: "æ_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________Â",
    	delimitedTextArea: "æ_(use comma or newline to separate)___________Â",
    	fgdcDate: "æ_(yyyy or yyyy-mm or yyyy-mm-dd)__________Â",
    	fgdcTime: "æ_(hh:mm:ss.sss[+-]hh:mm)________Â",
    	integer: "æ_(enter an integer)______Â",
    	latitude: "æ_(decimal degrees)______Â",
    	longitude: "æ_(decimal degrees)______Â",
    	number: "æ_(enter a number)______Â",
    	numberGreaterThanZero: "æ_(enter a number > 0)_______Â"
    },
    
    isoTopicCategoryCode: {
    	caption: "æ_Topic Category_____Â",
    	boundaries: "æ_Administrative and Political Boundaries_____________Â",
    	farming: "æ_Agriculture and Farming________Â",
    	climatologyMeteorologyAtmosphere: "æ_Atmosphere and Climatic________Â",
    	biota: "æ_Biology and Ecology_______Â",
    	economy: "æ_Business and Economic_______Â",
    	planningCadastre: "æ_Cadastral____Â",
    	society: "æ_Cultural, Society and Demography___________Â",
    	elevation: "æ_Elevation and Derived Products__________Â",
    	environment: "æ_Environment and Conservation_________Â",
    	structure: "æ_Facilities and Structures_________Â",
    	geoscientificInformation: "æ_Geological and Geophysical_________Â",
    	health: "æ_Human Health and Disease________Â",
    	imageryBaseMapsEarthCover: "æ_Imagery and Base Maps_______Â",
    	inlandWaters: "æ_Inland Water Resources________Â",
    	location: "æ_Locations and Geodetic Networks__________Â",
    	intelligenceMilitary: "æ_Military___Â",
    	oceans: "æ_Oceans and Estuaries_______Â",
    	transportation: "æ_Transportation Networks________Â",
    	utilitiesCommunication: "æ_Utilities and Communication_________Â"
    },
    
    multiplicity: {
    	moveElementDown: "æ_Move Section Down______Â",
    	moveElementUp: "æ_Move Section Up______Â",
    	removeElement: "æ_Remove Section_____Â",
    	repeatElement: "æ_Repeat Section_____Â"
    },
    
    serviceTypes: {
  		featureService: "æ_Feature Service______Â",
  		mapService: "æ_Map Service____Â",
  		imageService: "æ_Image Service_____Â",
  		wms: "æ_WMS__Â",
  		wfs: "æ_WFS__Â",
  		wcs: "æ_WCS__Â"
    },
    
    validation: {
    	pattern: "æ_{label} - {message}_______Â",
    	patternWithHint: "æ_{label} - {message} {hint}_________Â",
	    ok: "æ_OK__Â",
	    empty: "æ_A value is required_______Â.",
	    date: "æ_The value must be a date_________Â.",
	    integer: "æ_The value must be an integer__________Â.",
	    number: "æ_The value must be an number_________Â.",
	    other: "æ_Invalid value_____Â."
    },
    
    validationPane: {
    	clearMessages: "æ_Clear Messages_____Â"
    }
    
  })
);
