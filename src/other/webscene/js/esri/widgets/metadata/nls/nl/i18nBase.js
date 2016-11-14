define(
   ({
  	
    general: {
      cancel: "Annuleren",
      close: "Sluiten",
    	none: "Ĳ_None__ä",
    	ok: "Ĳ_OK__ä",
    	other: "Ĳ_Other___ä",
    	stamp: "Ĳ_Stamp___ä"
    },
    
    editor: {
      noMetadata: "Er is geen metadata voor dit item.",
    	xmlViewOnly: "Ĳ_This type of metadata can only be viewed as an XML________________ä.",
    	editorDialog: {
    		caption: "Ĳ_Metadata___ä",
    		captionPattern: "Ĳ_Metadata for {title}_______ä"
    	},
    	primaryToolbar: {
    		view: "Ĳ_View__ä",
    		viewXml: "Ĳ_View XML___ä",
    		edit: "Ĳ_Edit__ä",
    		initializing: "Ĳ_Loading____ä...",
    		startingEditor: "Ĳ_Starting editor______ä...",
    		loadingDocument: "Ĳ_Loading document_______ä...",
    		updatingDocument: "Ĳ_Updating document_______ä...",
    		generatingView: "Ĳ_Generating view______ä...",
    		errors: {
    			errorGeneratingView: "Ĳ_An error occurred while generating the view______________ä.",
    			errorLoadingDocument: "Ĳ_An error occurred while loading the document_______________ä."
    		}
    	},
    	changesNotSaved: {
    		prompt: "Ĳ_Your document has changes that have not been saved________________ä.",
    		dialogTitle: "Ĳ_Close Metadata Editor_______ä",
    		closeButton: "Ĳ_Discard & Close______ä"
    	},
    	download: {
    		caption: "Ĳ_Download___ä",
    		dialogTitle: "Ĳ_Download___ä",
    		prompt: "Ĳ_Click here to download your file___________ä."
    	},
    	load: {
    		caption: "Ĳ_Load__ä",
    		dialogTitle: "Ĳ_Load Metadata_____ä",
    		typeTab: "Ĳ_A Type___ä",
    		fileTab: "Ĳ_A File___ä",
    		templateTab: "Ĳ_A Template____ä",
    		itemTab: "Ĳ_Your Item____ä",
    		filePrompt: "Ĳ_Select a local XML file________ä:",
    		templatePrompt: "Ĳ_Select a local XML file (key properties will be updated)__________________ä:",
    		pullItem: "Ĳ_Update metadata with key properties of your item________________ä.",
    		importWarning: "Ĳ_The selected file did not match a supported format________________ä.",
    		loading: "Ĳ_Loading____ä...",
    		noMetadata: "Ĳ_Metadata can be created for this item by choosing one of the following options_________________________ä.",
    		unrecognizedMetadata: "Ĳ_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ä.",
    		errorLoading: "Ĳ_There was an error while loading___________ä.",
    		warnings: {
    			badFile: "Ĳ_The selected file could not be loaded____________ä.",
    			notAnXml: "Ĳ_The selected file is not an XML file____________ä.",
    			notSupported: "Ĳ_This type of file is not supported____________ä."
    		}
    	},
    	save: {
    		caption: "Ĳ_Save__ä",
    		dialogTitle: "Ĳ_Save Metadata_____ä",
    		working: "Ĳ_Saving metadata______ä...",
    		errorSaving: "Ĳ_An error occurred, your metadata was not saved_______________ä.",
    		saveDialog: {
    			pushCaption: "Ĳ_Apply changes to your item_________ä"
    		}
    	},
    	saveAndClose: {
    		caption: "Ĳ_Save & Close_____ä"
    	},
    	saveDraft: {
    		caption: "Ĳ_Draft___ä",
    		dialogTitle: "Ĳ_Save a Local Draft______ä"
    	},
    	del: {
    		caption: "Ĳ_Delete___ä",
    		dialogTitle: "Ĳ_Delete Metadata______ä",
    		prompt: "Ĳ_Are you sure you want to delete this metadata_______________ä?",
    		working: "Ĳ_Deleting metadata_______ä...",
    		errorDeleting: "Ĳ_An error occurred, your metadata was not deleted________________ä."
    	},
    	transform: {
    		caption: "Ĳ_Transform____ä",
    		dialogTitle: "Ĳ_Transform To_____ä",
    		prompt: "",
    		working: "Ĳ_Transforming______ä...",
    		errorTransforming: "Ĳ_An error occurred while transforming your document________________ä."
    	},
    	errorDialog: {
    		dialogTitle: "Ĳ_There was an error______ä"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "Ĳ_Metadata___ä"
      	}
      }
    },
    
  	calendar: {
  		button: "Ĳ_Calendar____ä...",
  		title: "Ĳ_Calendar___ä"
  	},
    
  	geoExtent: {
  		button: "Ĳ_Set Geographic Extent________ä...",
  		title: "Ĳ_Geographic Extent______ä",
  		navigate: "Ĳ_Navigate___ä",
  		draw: "Ĳ_Draw a Rectangle______ä",
  		drawHint: "Ĳ_Press down to start and let go to finish_____________ä."
  	},
  	
    hints: {
    	date: "Ĳ_(yyyy or yyyy-mm or yyyy-mm-dd)__________ä",
    	dateTime: "Ĳ_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ä",
    	dateOrDateTime: "Ĳ_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ä",
    	delimitedTextArea: "Ĳ_(use comma or newline to separate)___________ä",
    	fgdcDate: "Ĳ_(yyyy or yyyy-mm or yyyy-mm-dd)__________ä",
    	fgdcTime: "Ĳ_(hh:mm:ss.sss[+-]hh:mm)________ä",
    	integer: "Ĳ_(enter an integer)______ä",
    	latitude: "Ĳ_(decimal degrees)______ä",
    	longitude: "Ĳ_(decimal degrees)______ä",
    	number: "Ĳ_(enter a number)______ä",
    	numberGreaterThanZero: "Ĳ_(enter a number > 0)_______ä"
    },
    
    isoTopicCategoryCode: {
    	caption: "Ĳ_Topic Category_____ä",
    	boundaries: "Ĳ_Administrative and Political Boundaries_____________ä",
    	farming: "Ĳ_Agriculture and Farming________ä",
    	climatologyMeteorologyAtmosphere: "Ĳ_Atmosphere and Climatic________ä",
    	biota: "Ĳ_Biology and Ecology_______ä",
    	economy: "Ĳ_Business and Economic_______ä",
    	planningCadastre: "Ĳ_Cadastral____ä",
    	society: "Ĳ_Cultural, Society and Demography___________ä",
    	elevation: "Ĳ_Elevation and Derived Products__________ä",
    	environment: "Ĳ_Environment and Conservation_________ä",
    	structure: "Ĳ_Facilities and Structures_________ä",
    	geoscientificInformation: "Ĳ_Geological and Geophysical_________ä",
    	health: "Ĳ_Human Health and Disease________ä",
    	imageryBaseMapsEarthCover: "Ĳ_Imagery and Base Maps_______ä",
    	inlandWaters: "Ĳ_Inland Water Resources________ä",
    	location: "Ĳ_Locations and Geodetic Networks__________ä",
    	intelligenceMilitary: "Ĳ_Military___ä",
    	oceans: "Ĳ_Oceans and Estuaries_______ä",
    	transportation: "Ĳ_Transportation Networks________ä",
    	utilitiesCommunication: "Ĳ_Utilities and Communication_________ä"
    },
    
    multiplicity: {
    	moveElementDown: "Ĳ_Move Section Down______ä",
    	moveElementUp: "Ĳ_Move Section Up______ä",
    	removeElement: "Ĳ_Remove Section_____ä",
    	repeatElement: "Ĳ_Repeat Section_____ä"
    },
    
    serviceTypes: {
  		featureService: "Ĳ_Feature Service______ä",
  		mapService: "Ĳ_Map Service____ä",
  		imageService: "Ĳ_Image Service_____ä",
  		wms: "Ĳ_WMS__ä",
  		wfs: "Ĳ_WFS__ä",
  		wcs: "Ĳ_WCS__ä"
    },
    
    validation: {
    	pattern: "Ĳ_{label} - {message}_______ä",
    	patternWithHint: "Ĳ_{label} - {message} {hint}_________ä",
	    ok: "Ĳ_OK__ä",
	    empty: "Ĳ_A value is required_______ä.",
	    date: "Ĳ_The value must be a date_________ä.",
	    integer: "Ĳ_The value must be an integer__________ä.",
	    number: "Ĳ_The value must be an number_________ä.",
	    other: "Ĳ_Invalid value_____ä."
    },
    
    validationPane: {
    	clearMessages: "Ĳ_Clear Messages_____ä"
    }
    
  })
);
