define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "Å_ISO 19115 (Data)______ö",
    		description: ""
    	},
    	service: {
    		caption: "Å_ISO 19119 (Service)_______ö",
    		description: ""
    	},
    	gmi: {
    		caption: "Å_ISO 19115-2 (Imagery and Gridded Data)____________ö",
    		description: ""
    	}
    },
    
    general: {
    	reference: "Å_Reference____ö"
    },
    
    sections: {
    	metadata: "Å_Metadata___ö",
    	identification: "Å_Identification_____ö",
    	distribution: "Å_Distribution_____ö",
    	quality: "Å_Quality___ö",
    	acquisition: "Å_Acquisition____ö"
    },
    
    metadataSection: {
    	identifier: "Å_Identifier____ö",
    	contact: "Å_Contact___ö",
    	date: "Å_Date__ö",
    	standard: "Å_Standard___ö",
    	reference: "Å_Reference____ö"
    },
    
    identificationSection: {
    	citation: "Å_Citation___ö",
    	description: "Å_Description____ö",
    	contact: "Å_Contact___ö",
    	thumbnail: "Å_Thumbnail____ö",
    	keywords: "Å_Keywords___ö",
    	constraints: "Å_Constraints____ö",
    	resource: "Å_Resource___ö",
    	resourceTab: {
    		representation: "Å_Representation_____ö",
    		language: "Å_Language___ö",
    		classification: "Å_Classification_____ö",
    		extent: "Å_Extent___ö"
    	},
    	serviceResourceTab: {
    		serviceType: "Å_Service Type_____ö",
    		extent: "Å_Extent___ö",
    		couplingType: "Å_Coupling Type_____ö",
    		operation: "Å_Operation____ö",
    		operatesOn: "Å_Operates On____ö"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "Å_Scope___ö",
    	conformance: "Å_Conformance____ö",
    	lineage: "Å_Lineage___ö"
    },
    
    acquisitionSection: {
    	requirement: "Å_Requirement____ö",
    	objective: "Å_Objective____ö",
    	instrument: "Å_Instrument____ö",
    	plan: "Å_Plan__ö",
    	operation: "Å_Operation____ö",
    	platform: "Å_Platform___ö",
    	environment: "Å_Environment____ö"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "Å_Abstract___ö",
    	purpose: "Å_Purpose___ö",
    	credit: "Å_Credits___ö",
    	pointOfContact: "Å_Point of Contact______ö",
    	resourceMaintenance: "Å_Maintenance____ö",
    	graphicOverview: "Å_Graphic Overview______ö",
    	descriptiveKeywords: "Å_Keyword Collection______ö",
    	resourceConstraints: "Å_Constraints____ö"
    },
    
    CI_Address: {
    	deliveryPoint: "Å_Delivery Point_____ö",
    	city: "Å_City__ö",
    	administrativeArea: "Å_Administrative Area_______ö",
    	postalCode: "Å_Postal Code____ö",
    	country: "Å_Country___ö",
    	electronicMailAddress: "Å_E-Mail Address_____ö"
    },
    
    CI_Citation: {
    	title: "Å_Title___ö",
    	alternateTitle: "Å_Alternate Title______ö",
    	identifier: "Å_Unique Resource Identifier_________ö",
    	resource: {
    		title: "Å_Resource Title_____ö",
    		date: "Å_Resource Date_____ö"
    	},
    	specification: {
    		title: "Å_Specification Title_______ö",
    		date: "Å_Specification Date______ö"
    	}
    },
    
    CI_Contact: {
    	phone: "Å_Phone___ö",
    	address: "Å_Address___ö",
    	onlineResource: "Å_Online Resource______ö",
    	hoursOfService: "Å_Hours of Service______ö",
    	contactInstructions: "Å_Contact Instructions_______ö"
    },
    
    CI_Date: {
    	date: "Å_Date__ö",
    	dateType: "Å_Date Type____ö"
    },
    
  	CI_DateTypeCode: {
  		caption: "Å_Date Type____ö",
  		creation: "Å_Creation Date_____ö",
  		publication: "Å_Publication Date______ö",
  		revision: "Å_Revision Date_____ö"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "Å_Function___ö",
    	download: "Å_Download___ö",
    	information: "Å_Information____ö",
    	offlineAccess: "Å_Offline Access_____ö",
    	order: "Å_Order___ö",
    	search: "Å_Search___ö"
    },
    
    CI_OnlineResource: {
    	caption: "Å_Online Resource______ö",
    	linkage: "Å_URL__ö",
    	protocol: "Å_Protocol___ö",
    	applicationProfile: "Å_Application Profile_______ö",
    	name: "Å_Name__ö",
    	description: "Å_Description____ö",
    	sFunction: "Å_Function___ö"
    },
    
    CI_ResponsibleParty: {
    	caption: "Å_Point of Contact______ö",
    	individualName: "Å_Individual Name______ö",
    	organisationName: "Å_Organisation Name______ö",
    	positionName: "Å_Position Name_____ö",
    	contactInfo: "Å_Contact Info_____ö",
    	role: "Å_Role__ö"
    },
    
    CI_RoleCode: {
    	caption: "Å_Role__ö",
    	resourceProvider: "Å_Resource Provider______ö",
    	custodian: "Å_Custodian____ö",
    	owner: "Å_Owner___ö",
    	user: "Å_User__ö",
    	distributor: "Å_Distributor____ö",
    	originator: "Å_Originator____ö",
    	pointOfContact: "Å_Point of Contact______ö",
    	principalInvestigator: "Å_Principal Investigator________ö",
    	processor: "Å_Processor____ö",
    	publisher: "Å_Publisher____ö",
    	author: "Å_Author___ö"
    },
    
    CI_Telephone: {
    	voice: "Å_Voice___ö",
    	facsimile: "Å_Fax__ö"
    },
    
    DCPList: {
    	caption: "Å_DCP__ö",
    	XML: "Å_XML__ö",
    	CORBA: "Å_CORBA___ö",
    	JAVA: "Å_JAVA__ö",
    	COM: "Å_COM__ö",
    	SQL: "Å_SQL__ö",
    	WebServices: "Å_WebServices____ö"
    },
    
    DQ_ConformanceResult: {
    	caption: "Å_Conformance Result______ö",
    	explanation: "Å_Explanation____ö",
    	degree: {
    		caption: "Å_Degree___ö",
    		validationPerformed: "Å_Validation Performed_______ö",
    		conformant: "Å_Conformant____ö",
    		nonConformant: "Å_Non Conformant_____ö"
    	}
    },
    
    DQ_DataQuality: {
    	report: "Å_Report___ö"
    },
    
    DQ_Scope : {
    	level: "Å_Scope (quality information applies to)____________ö",
    	levelDescription: "Å_Level Description______ö"
    },
    
    EX_Extent: {
    	caption: "Å_Extent___ö",
    	description: "Å_Description____ö",
    	geographicElement: "Å_Spatial Extent_____ö",
    	temporalElement: "Å_Temporal Extent______ö",
    	verticalElement: "Å_Vertical Extent______ö"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "Å_West Bounding Longitude________ö",
    	eastBoundLongitude: "Å_East Bounding Longitude________ö",
    	southBoundLatitude: "Å_South Bounding Latitude________ö",
    	northBoundLatitude: "Å_North Bounding Latitude________ö"
    },
    
    EX_GeographicDescription: {
    	caption: "Å_Geographic Description________ö"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "Å_Begin Date____ö",
    		endPosition: "Å_End Date___ö"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "Å_Minimum Value_____ö",
    	maximumValue: "Å_Maximum Value_____ö",
    	verticalCRS: "Å_Vertical CRS_____ö"
    },
    
    Length: {
    	caption: "Å_Length___ö",
    	uom: "Å_Units of Measure______ö",
    	km: "Å_Kilometers____ö",
    	m: "Å_Meters___ö",
    	mi: "Å_Miles___ö",
    	ft: "Å_Feet__ö"
    },
    
    LI_Lineage: {
    	statement: "Å_Lineage Statement______ö"
    },
    
    MD_BrowseGraphic: {
    	fileName: "Å_Browse Graphic URL______ö",
    	fileDescription: "Å_Browse Graphic Caption________ö",
    	fileType: "Å_Browse Graphic Type_______ö"
    },
    
    MD_ClassificationCode: {
    	unclassified: "Å_Unclassified_____ö",
    	restricted: "Å_Restricted____ö",
    	confidential: "Å_Confidential_____ö",
    	secret: "Å_Secret___ö",
    	topSecret: "Å_Top Secret____ö"
    },
    
    MD_Constraints: {
    	caption: "Å_Usage Constraints______ö",
    	useLimitation: "Å_Use Limitation_____ö"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "Å_Spatial Representation Type_________ö",
    	spatialResolution: "Å_Spatial Resolution______ö",
    	language: "Å_Resource Language______ö",
    	supplementalInformation: "Å_Supplemental_____ö"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "Å_Online___ö"
    },
    
    MD_Distribution: {
    	distributionFormat: "Å_Distribution Format_______ö",
    	transferOptions: "Å_Transfer Options______ö"
    },
    
    MD_Format: {
    	name: "Å_Format Name____ö",
    	version: "Å_Format Version_____ö"
    },
    
    MD_Identifier: {
    	caption: "Å_URI__ö",
    	identifierCaption: "Å_Identifier____ö",
    	code: "Å_Code__ö"
    },
    
    MD_Keywords: {
    	delimitedCaption: "Å_Keywords___ö",
    	thesaurusName: "Å_Associated Thesaurus_______ö"
    },
    
    MD_KeywordTypeCode: {
    	caption: "Å_Keyword Type_____ö",
    	discipline: "Å_Discipline____ö",
    	place: "Å_Place___ö",
    	stratum: "Å_Stratum___ö",
    	temporal: "Å_Temporal___ö",
    	theme: "Å_Theme___ö"
    },
    
    MD_LegalConstraints: {
    	caption: "Å_Legal Constraints______ö",
    	accessConstraints: "Å_Access Constraints______ö",
    	useConstraints: "Å_Use Constraints______ö",
    	otherConstraints: "Å_Other Constraints______ö"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "Å_Frequency____ö",
    	continual: "Å_Continual____ö",
    	daily: "Å_Daily___ö",
    	weekly: "Å_Weekly___ö",
    	fortnightly: "Å_Fortnightly____ö",
    	monthly: "Å_Monthly___ö",
    	quarterly: "Å_Quarterly____ö",
    	biannually: "Å_Biannually____ö",
    	annually: "Å_Annually___ö",
    	asNeeded: "Å_As Needed____ö",
    	irregular: "Å_Irregular____ö",
    	notPlanned: "Å_Not Planned____ö",
    	unknown: "Å_Unknown___ö"
    },
    
    MD_Metadata: {
    	caption: "Å_Metadata___ö",
    	fileIdentifier: "Å_File Identifier______ö",
    	language: "Å_Metadata Language______ö",
    	hierarchyLevel: "Å_Hierarchy Level______ö",
    	hierarchyLevelName: "Å_Hierarchy Level Name_______ö",
    	contact: "Å_Metadata Contact______ö",
    	dateStamp: "Å_Metadata Date_____ö",
    	metadataStandardName: "Å_Metadata Standard Name________ö",
    	metadataStandardVersion: "Å_Metadata Standard Version_________ö",
    	referenceSystemInfo: "Å_Reference System______ö",
    	identificationInfo: "Å_Identification_____ö",
    	distributionInfo: "Å_Distribution_____ö",
    	dataQualityInfo: "Å_Quality___ö"
    },
    
    MD_ProgressCode: {
    	caption: "Å_Progress Code_____ö",
    	completed: "Å_Completed____ö",
    	historicalArchive: "Å_Historical Archive______ö",
    	obsolete: "Å_Obsolete___ö",
    	onGoing: "Å_On Going___ö",
    	planned: "Å_Planned___ö",
    	required: "Å_Required___ö",
    	underDevelopment: "Å_Under Development______ö"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "Å_Denominator____ö"
    },
    
    MD_Resolution: {
    	equivalentScale: "Å_Equivalent Scale______ö",
    	distance: "Å_Distance___ö"
    },
    
    MD_RestrictionCode: {
    	copyright: "Å_Copyright____ö",
    	patent: "Å_Patent___ö",
    	patentPending: "Å_Patent Pending_____ö",
    	trademark: "Å_Trademark____ö",
    	license: "Å_License___ö",
    	intellectualPropertyRights: "Å_Intellectual Property Rights_________ö",
    	restricted: "Å_Restricted____ö",
    	otherRestrictions: "Å_Other Restrictions______ö"
    },
    
    MD_ScopeCode: {
    	attribute: "Å_Attribute____ö",
    	attributeType: "Å_Attribute type_____ö",
    	collectionHardware: "Å_Collection hardware_______ö",
    	collectionSession: "Å_Collection session______ö",
    	dataset: "Å_Dataset___ö",
    	series: "Å_Series___ö",
    	nonGeographicDataset: "Å_Non geographic dataset________ö",
    	dimensionGroup: "Å_Dimension group______ö",
    	feature: "Å_Feature___ö",
    	featureType: "Å_Feature type_____ö",
    	propertyType: "Å_Property type_____ö",
    	fieldSession: "Å_Field session_____ö",
    	software: "Å_Software___ö",
    	service: "Å_Service___ö",
    	model: "Å_Model___ö",
    	tile: "Å_Tile__ö"
    },
    
    MD_ScopeDescription: {
    	attributes: "Å_Attributes____ö",
    	features: "Å_Features___ö",
    	featureInstances: "Å_Feature Instances______ö",
    	attributeInstances: "Å_Attribute Instances_______ö",
    	dataset: "Å_Dataset___ö",
    	other: "Å_Other___ö"
    },
    
    MD_SecurityConstraints: {
    	caption: "Å_Security Constraints_______ö",
    	classification: "Å_Classification_____ö",
    	userNote: "Å_User Note____ö",
    	classificationSystem: "Å_Classification System_______ö",
    	handlingDescription: "Å_Handling Description_______ö"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "Å_Spatial Representation Type_________ö",
    	vector: "Å_Vector___ö",
    	grid: "Å_Grid__ö",
    	textTable: "Å_Text Table____ö",
    	tin: "Å_TIN__ö",
    	stereoModel: "Å_Stereo Model_____ö",
    	video: "Å_Video___ö"
    },
    
    MD_TopicCategoryCode: {
    	caption: "Å_Topic Category_____ö",
    	boundaries: "Å_Administrative and Political Boundaries_____________ö",
    	farming: "Å_Agriculture and Farming________ö",
    	climatologyMeteorologyAtmosphere: "Å_Atmosphere and Climatic________ö",
    	biota: "Å_Biology and Ecology_______ö",
    	economy: "Å_Business and Economic_______ö",
    	planningCadastre: "Å_Cadastral____ö",
    	society: "Å_Cultural, Society and Demography___________ö",
    	elevation: "Å_Elevation and Derived Products__________ö",
    	environment: "Å_Environment and Conservation_________ö",
    	structure: "Å_Facilities and Structures_________ö",
    	geoscientificInformation: "Å_Geological and Geophysical_________ö",
    	health: "Å_Human Health and Disease________ö",
    	imageryBaseMapsEarthCover: "Å_Imagery and Base Maps_______ö",
    	inlandWaters: "Å_Inland Water Resources________ö",
    	location: "Å_Locations and Geodetic Networks__________ö",
    	intelligenceMilitary: "Å_Military___ö",
    	oceans: "Å_Oceans and Estuaries_______ö",
    	transportation: "Å_Transportation Networks________ö",
    	utilitiesCommunication: "Å_Utilities and Communication_________ö"
    },
    
    MI_ContextCode: {
    	caption: "Å_Context___ö",
    	acquisition: "Å_Acquisition____ö",
    	pass: "Å_Pass__ö",
    	wayPoint: "Å_Waypoint___ö"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "Å_Environmental Conditions________ö",
    	averageAirTemperature: "Å_Average Air Temperature________ö",
    	maxRelativeHumidity: "Å_Maximum Relative Humidity_________ö",
    	maxAltitude: "Å_Maximum Altitude______ö",
    	meterologicalConditions: "Å_Meterological Conditions________ö"
    },
    
    MI_Event: {
    	identifier: "Å_Event Identifier______ö",
    	time: "Å_Time__ö",
    	expectedObjectiveReference: "Å_Expected Objective (Objective Identifer)_____________ö",
    	relatedSensorReference: "Å_Related Sensor (Instrument Identifer)____________ö",
    	relatedPassReference: "Å_Related Pass (Platform Pass Identifer)____________ö"
    },

    MI_GeometryTypeCode: {
    	point: "Å_Point___ö",
    	linear: "Å_Linear___ö",
    	areal: "Å_Areal___ö",
    	strip: "Å_Strip___ö"
    },
    
    MI_Instrument: {
    	citation: "Å_Instrument Citation_______ö",
    	identifier: "Å_Instrument Identifier_______ö",
    	sType: "Å_Instrument Type______ö",
    	description: "Å_Instrument Description________ö",
    	mountedOn: "Å_Mounted On____ö",
    	mountedOnPlatformReference: "Å_Mounted On (Platform Identifier)___________ö"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "Å_Acquisition____ö"
    },
    
    MI_Objective: {
    	caption: "Å_Objective____ö",
    	identifier: "Å_Objective Identifier_______ö",
    	priority: "Å_Priority of Target______ö",
    	sFunction: "Å_Function of Objective_______ö",
    	extent: "Å_Extent___ö",
    	pass: "Å_Platform Pass_____ö",
    	sensingInstrumentReference: "Å_Sensing Instrument (Instrument Identifier)______________ö",
    	objectiveOccurrence: "Å_Events___ö",
    	sections: {
    		identification: "Å_Identification_____ö",
    		extent: "Å_Extent___ö",
    		pass: "Å_Pass__ö",
    		sensingInstrument: "Å_Sensing Instrument______ö",
    		objectiveOccurrence: "Å_Events___ö"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "Å_Type (Collection Technique for Objective)_____________ö",
    	instantaneousCollection: "Å_Instantaneous Collection________ö",
    	persistentView: "Å_Persistent View______ö",
    	survey: "Å_Survey___ö"
    },
    
    MI_Operation: {
    	caption: "Å_Operation____ö",
    	description: "Å_Operation Description_______ö",
    	citation: "Å_Operation Citation______ö",
    	identifier: "Å_Operation Identifier_______ö",
    	status: "Å_Operation Status______ö",
    	objectiveReference: "Å_Related Objective (Objective Identifier)_____________ö",
    	planReference: "Å_Related Plan (Plan Identifier)__________ö",
    	significantEventReference: "Å_Related Event (Event Identifier)___________ö",
    	platformReference: "Å_Related Platform (Platform Identifier)____________ö",
    	sections: {
    		identification: "Å_Identification_____ö",
    		related: "Å_Related___ö"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "Å_Operation Type_____ö",
    	real: "Å_Real__ö",
    	simulated: "Å_Simulated____ö",
    	synthesized: "Å_Synthesized____ö"
    },
    
    MI_Plan: {
    	sType: "Å_Sampling Geometry for Collecting Data____________ö",
    	status: "Å_Status of Plan_____ö",
    	citation: "Å_Citation of Authority Requesting Collection______________ö",
    	satisfiedRequirementReference: "Å_Satisfied Requirement (Requirement Identifier)_______________ö",
    	operationReference: "Å_Related Operation (Operation Identifier)_____________ö"
    },
    
    MI_Platform: {
    	citation: "Å_Platform Citation______ö",
    	identifier: "Å_Platform Identifier_______ö",
    	description: "Å_Description of Platform Supporting the Instrument________________ö",
    	sponsor: "Å_Sponsor Organization for Platform___________ö",
    	instrument: "Å_Instrument(s) mounted on the platform____________ö",
    	instrumentReference: "Å_Instrument Identifier_______ö",
    	sections: {
    		identification: "Å_Identification_____ö",
    		sponsor: "Å_Sponsor___ö",
    		instruments: "Å_Instruments____ö"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "Å_Platform Pass Identifier________ö",
    	extent: "Å_Platform Pass Extent_______ö",
    	relatedEventReference: "Å_Related Event (Event Identifer)__________ö"
    },

    MI_PriorityCode: {
    	critical: "Å_Critical___ö", 
    	highImportance: "Å_High Importance______ö",
    	mediumImportance: "Å_Medium Importance______ö",
    	lowImportance: "Å_Low Importance_____ö"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "Å_Requested Date Of Collection_________ö",
    	latestAcceptableDate: "Å_Latest Acceptable Date________ö"
    },
    
    MI_Requirement: {
    	caption: "Å_Requirement____ö",
    	citation: "Å_Citation for Requirement Guidance Material______________ö",
    	identifier: "Å_Requirement Identifier________ö",
    	requestor: "Å_Requestor of Requirement________ö",
    	recipient: "Å_Recipient of Requirement Results___________ö",
    	priority: "Å_Requirement Priority_______ö",
    	requestedDate: "Å_Requested Date_____ö",
    	expiryDate: "Å_Expiry Date____ö",
    	satisifiedPlanReference: "Å_Satisfied Plan (Plan Identifier)___________ö",
    	sections: {
    		identification: "Å_Identification_____ö",
    		requestor: "Å_Requestor____ö",
    		recipient: "Å_Recipient____ö",
    		priorityAndDates: "Å_Priority And Dates______ö",
    		satisifiedPlan: "Å_Satisified  Plan______ö"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "Å_Sequence___ö",
    	start: "Å_Start___ö",
    	end: "Å_End__ö",
    	instantaneous: "Å_Instantaneous_____ö"
    },
    
    MI_TriggerCode: {
    	caption: "Å_Trigger___ö",
    	automatic: "Å_Automatic____ö",
    	manual: "Å_Manual___ö",
    	preProgrammed: "Å_Preprogrammed_____ö"
    },
    
    ObjectReference: {
    	uuidref: "Å_UUID Reference_____ö",
    	xlinkref: "Å_URL Reference_____ö"
    },
    
    RS_Identifier: {
    	caption: "Å_ID Plus Code Space______ö",
    	code: "Å_Code__ö",
    	codeSpace: "Å_Code Space____ö"
    },
    
    SV_CouplingType: {
    	loose: "Å_Loose___ö",
    	mixed: "Å_Mixed___ö",
    	tight: "Å_Tight___ö"
    },
    
    SV_OperationMetadata: {
    	operationName: "Å_Operation Name_____ö",
    	DCP: "Å_DCP__ö",
    	connectPoint: "Å_Connect Point_____ö"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "Å_ServiceType____ö",
    	couplingType: "Å_Coupling Type_____ö",
    	containsOperations: "Å_Operation Metadata______ö",
    	operatesOn: "Å_Operates On____ö"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "Å_Indeterminate Position________ö",
    	indeterminates: {
    		before: "Å_Before___ö",
       	after: "Å_After___ö",
      	now: "Å_Now__ö",
      	unknown: "Å_Unknown___ö"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "Å_GEMET Concept Keyword_______ö",
    		tool: "Å_Look Up____ö...",
    		dialogTitle: "Å_GEMET - Concept Keyword________ö",
    		searchLabel: "Å_Search___ö:",
    		searchTip: "Å_Search GEMET_____ö"
    	},
    	theme: {
    		tool: "Å_Look Up____ö...",
    		dialogTitle: "Å_GEMET - Inspire Data Theme_________ö"
    	},
    	ioerror: "Å_There was an error communicating with the GEMET service: {url}____________________ö",
    	searching: "Å_Searching GEMET______ö...",
    	noMatch: "Å_No matching results were found__________ö.",
      languages: {
      	"bg": "Å_Bulgarian____ö",
      	"cs": "Å_Czech___ö",
      	"da": "Å_Danish___ö",
      	"nl": "Å_Dutch___ö",
      	"en": "Å_English___ö",
      	"et": "Å_Estonian___ö",
      	"fi": "Å_Finnish___ö",
      	"fr": "Å_French___ö",
      	"de": "Å_German___ö",
      	"el": "Å_Greek___ö",
      	"hu": "Å_Hungarian____ö",
      	"ga": "Å_Gaelic (Irish)_____ö",
      	"it": "Å_Italian___ö",
      	"lv": "Å_Latvian___ö",
      	"lt": "Å_Lithuanian____ö",
      	"mt": "Å_Maltese___ö",
      	"pl": "Å_Polish___ö", 
      	"pt": "Å_Portuguese____ö",
      	"ro": "Å_Romanian___ö",
      	"sk": "Å_Slovak___ö",
      	"sl": "Å_Slovenian____ö",  	
      	"es": "Å_Spanish___ö",
      	"sv": "Å_Swedish___ö"
      }
    }
   
  })
);
