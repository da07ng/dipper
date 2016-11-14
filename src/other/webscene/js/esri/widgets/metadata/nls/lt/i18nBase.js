define(
   ({
  	
    general: {
      cancel: "Atšaukti",
      close: "Užverti",
    	none: "Į_None__š",
    	ok: "Į_OK__š",
    	other: "Į_Other___š",
    	stamp: "Į_Stamp___š"
    },
    
    editor: {
      noMetadata: "Šio elemento metaduomenų nėra.",
    	xmlViewOnly: "Į_This type of metadata can only be viewed as an XML________________š.",
    	editorDialog: {
    		caption: "Į_Metadata___š",
    		captionPattern: "Į_Metadata for {title}_______š"
    	},
    	primaryToolbar: {
    		view: "Į_View__š",
    		viewXml: "Į_View XML___š",
    		edit: "Į_Edit__š",
    		initializing: "Į_Loading____š...",
    		startingEditor: "Į_Starting editor______š...",
    		loadingDocument: "Į_Loading document_______š...",
    		updatingDocument: "Į_Updating document_______š...",
    		generatingView: "Į_Generating view______š...",
    		errors: {
    			errorGeneratingView: "Į_An error occurred while generating the view______________š.",
    			errorLoadingDocument: "Į_An error occurred while loading the document_______________š."
    		}
    	},
    	changesNotSaved: {
    		prompt: "Į_Your document has changes that have not been saved________________š.",
    		dialogTitle: "Į_Close Metadata Editor_______š",
    		closeButton: "Į_Discard & Close______š"
    	},
    	download: {
    		caption: "Į_Download___š",
    		dialogTitle: "Į_Download___š",
    		prompt: "Į_Click here to download your file___________š."
    	},
    	load: {
    		caption: "Į_Load__š",
    		dialogTitle: "Į_Load Metadata_____š",
    		typeTab: "Į_A Type___š",
    		fileTab: "Į_A File___š",
    		templateTab: "Į_A Template____š",
    		itemTab: "Į_Your Item____š",
    		filePrompt: "Į_Select a local XML file________š:",
    		templatePrompt: "Į_Select a local XML file (key properties will be updated)__________________š:",
    		pullItem: "Į_Update metadata with key properties of your item________________š.",
    		importWarning: "Į_The selected file did not match a supported format________________š.",
    		loading: "Į_Loading____š...",
    		noMetadata: "Į_Metadata can be created for this item by choosing one of the following options_________________________š.",
    		unrecognizedMetadata: "Į_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________š.",
    		errorLoading: "Į_There was an error while loading___________š.",
    		warnings: {
    			badFile: "Į_The selected file could not be loaded____________š.",
    			notAnXml: "Į_The selected file is not an XML file____________š.",
    			notSupported: "Į_This type of file is not supported____________š."
    		}
    	},
    	save: {
    		caption: "Į_Save__š",
    		dialogTitle: "Į_Save Metadata_____š",
    		working: "Į_Saving metadata______š...",
    		errorSaving: "Į_An error occurred, your metadata was not saved_______________š.",
    		saveDialog: {
    			pushCaption: "Į_Apply changes to your item_________š"
    		}
    	},
    	saveAndClose: {
    		caption: "Į_Save & Close_____š"
    	},
    	saveDraft: {
    		caption: "Į_Draft___š",
    		dialogTitle: "Į_Save a Local Draft______š"
    	},
    	del: {
    		caption: "Į_Delete___š",
    		dialogTitle: "Į_Delete Metadata______š",
    		prompt: "Į_Are you sure you want to delete this metadata_______________š?",
    		working: "Į_Deleting metadata_______š...",
    		errorDeleting: "Į_An error occurred, your metadata was not deleted________________š."
    	},
    	transform: {
    		caption: "Į_Transform____š",
    		dialogTitle: "Į_Transform To_____š",
    		prompt: "",
    		working: "Į_Transforming______š...",
    		errorTransforming: "Į_An error occurred while transforming your document________________š."
    	},
    	errorDialog: {
    		dialogTitle: "Į_There was an error______š"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "Į_Metadata___š"
      	}
      }
    },
    
  	calendar: {
  		button: "Į_Calendar____š...",
  		title: "Į_Calendar___š"
  	},
    
  	geoExtent: {
  		button: "Į_Set Geographic Extent________š...",
  		title: "Į_Geographic Extent______š",
  		navigate: "Į_Navigate___š",
  		draw: "Į_Draw a Rectangle______š",
  		drawHint: "Į_Press down to start and let go to finish_____________š."
  	},
  	
    hints: {
    	date: "Į_(yyyy or yyyy-mm or yyyy-mm-dd)__________š",
    	dateTime: "Į_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________š",
    	dateOrDateTime: "Į_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________š",
    	delimitedTextArea: "Į_(use comma or newline to separate)___________š",
    	fgdcDate: "Į_(yyyy or yyyy-mm or yyyy-mm-dd)__________š",
    	fgdcTime: "Į_(hh:mm:ss.sss[+-]hh:mm)________š",
    	integer: "Į_(enter an integer)______š",
    	latitude: "Į_(decimal degrees)______š",
    	longitude: "Į_(decimal degrees)______š",
    	number: "Į_(enter a number)______š",
    	numberGreaterThanZero: "Į_(enter a number > 0)_______š"
    },
    
    isoTopicCategoryCode: {
    	caption: "Į_Topic Category_____š",
    	boundaries: "Į_Administrative and Political Boundaries_____________š",
    	farming: "Į_Agriculture and Farming________š",
    	climatologyMeteorologyAtmosphere: "Į_Atmosphere and Climatic________š",
    	biota: "Į_Biology and Ecology_______š",
    	economy: "Į_Business and Economic_______š",
    	planningCadastre: "Į_Cadastral____š",
    	society: "Į_Cultural, Society and Demography___________š",
    	elevation: "Į_Elevation and Derived Products__________š",
    	environment: "Į_Environment and Conservation_________š",
    	structure: "Į_Facilities and Structures_________š",
    	geoscientificInformation: "Į_Geological and Geophysical_________š",
    	health: "Į_Human Health and Disease________š",
    	imageryBaseMapsEarthCover: "Į_Imagery and Base Maps_______š",
    	inlandWaters: "Į_Inland Water Resources________š",
    	location: "Į_Locations and Geodetic Networks__________š",
    	intelligenceMilitary: "Į_Military___š",
    	oceans: "Į_Oceans and Estuaries_______š",
    	transportation: "Į_Transportation Networks________š",
    	utilitiesCommunication: "Į_Utilities and Communication_________š"
    },
    
    multiplicity: {
    	moveElementDown: "Į_Move Section Down______š",
    	moveElementUp: "Į_Move Section Up______š",
    	removeElement: "Į_Remove Section_____š",
    	repeatElement: "Į_Repeat Section_____š"
    },
    
    serviceTypes: {
  		featureService: "Į_Feature Service______š",
  		mapService: "Į_Map Service____š",
  		imageService: "Į_Image Service_____š",
  		wms: "Į_WMS__š",
  		wfs: "Į_WFS__š",
  		wcs: "Į_WCS__š"
    },
    
    validation: {
    	pattern: "Į_{label} - {message}_______š",
    	patternWithHint: "Į_{label} - {message} {hint}_________š",
	    ok: "Į_OK__š",
	    empty: "Į_A value is required_______š.",
	    date: "Į_The value must be a date_________š.",
	    integer: "Į_The value must be an integer__________š.",
	    number: "Į_The value must be an number_________š.",
	    other: "Į_Invalid value_____š."
    },
    
    validationPane: {
    	clearMessages: "Į_Clear Messages_____š"
    }
    
  })
);
