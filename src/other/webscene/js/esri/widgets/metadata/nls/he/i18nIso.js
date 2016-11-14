define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "כן_ISO 19115 (Data)______ש",
    		description: ""
    	},
    	service: {
    		caption: "כן_ISO 19119 (Service)_______ש",
    		description: ""
    	},
    	gmi: {
    		caption: "כן_ISO 19115-2 (Imagery and Gridded Data)____________ש",
    		description: ""
    	}
    },
    
    general: {
    	reference: "כן_Reference____ש"
    },
    
    sections: {
    	metadata: "כן_Metadata___ש",
    	identification: "כן_Identification_____ש",
    	distribution: "כן_Distribution_____ש",
    	quality: "כן_Quality___ש",
    	acquisition: "כן_Acquisition____ש"
    },
    
    metadataSection: {
    	identifier: "כן_Identifier____ש",
    	contact: "כן_Contact___ש",
    	date: "כן_Date__ש",
    	standard: "כן_Standard___ש",
    	reference: "כן_Reference____ש"
    },
    
    identificationSection: {
    	citation: "כן_Citation___ש",
    	description: "כן_Description____ש",
    	contact: "כן_Contact___ש",
    	thumbnail: "כן_Thumbnail____ש",
    	keywords: "כן_Keywords___ש",
    	constraints: "כן_Constraints____ש",
    	resource: "כן_Resource___ש",
    	resourceTab: {
    		representation: "כן_Representation_____ש",
    		language: "כן_Language___ש",
    		classification: "כן_Classification_____ש",
    		extent: "כן_Extent___ש"
    	},
    	serviceResourceTab: {
    		serviceType: "כן_Service Type_____ש",
    		extent: "כן_Extent___ש",
    		couplingType: "כן_Coupling Type_____ש",
    		operation: "כן_Operation____ש",
    		operatesOn: "כן_Operates On____ש"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "כן_Scope___ש",
    	conformance: "כן_Conformance____ש",
    	lineage: "כן_Lineage___ש"
    },
    
    acquisitionSection: {
    	requirement: "כן_Requirement____ש",
    	objective: "כן_Objective____ש",
    	instrument: "כן_Instrument____ש",
    	plan: "כן_Plan__ש",
    	operation: "כן_Operation____ש",
    	platform: "כן_Platform___ש",
    	environment: "כן_Environment____ש"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "כן_Abstract___ש",
    	purpose: "כן_Purpose___ש",
    	credit: "כן_Credits___ש",
    	pointOfContact: "כן_Point of Contact______ש",
    	resourceMaintenance: "כן_Maintenance____ש",
    	graphicOverview: "כן_Graphic Overview______ש",
    	descriptiveKeywords: "כן_Keyword Collection______ש",
    	resourceConstraints: "כן_Constraints____ש"
    },
    
    CI_Address: {
    	deliveryPoint: "כן_Delivery Point_____ש",
    	city: "כן_City__ש",
    	administrativeArea: "כן_Administrative Area_______ש",
    	postalCode: "כן_Postal Code____ש",
    	country: "כן_Country___ש",
    	electronicMailAddress: "כן_E-Mail Address_____ש"
    },
    
    CI_Citation: {
    	title: "כן_Title___ש",
    	alternateTitle: "כן_Alternate Title______ש",
    	identifier: "כן_Unique Resource Identifier_________ש",
    	resource: {
    		title: "כן_Resource Title_____ש",
    		date: "כן_Resource Date_____ש"
    	},
    	specification: {
    		title: "כן_Specification Title_______ש",
    		date: "כן_Specification Date______ש"
    	}
    },
    
    CI_Contact: {
    	phone: "כן_Phone___ש",
    	address: "כן_Address___ש",
    	onlineResource: "כן_Online Resource______ש",
    	hoursOfService: "כן_Hours of Service______ש",
    	contactInstructions: "כן_Contact Instructions_______ש"
    },
    
    CI_Date: {
    	date: "כן_Date__ש",
    	dateType: "כן_Date Type____ש"
    },
    
  	CI_DateTypeCode: {
  		caption: "כן_Date Type____ש",
  		creation: "כן_Creation Date_____ש",
  		publication: "כן_Publication Date______ש",
  		revision: "כן_Revision Date_____ש"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "כן_Function___ש",
    	download: "כן_Download___ש",
    	information: "כן_Information____ש",
    	offlineAccess: "כן_Offline Access_____ש",
    	order: "כן_Order___ש",
    	search: "כן_Search___ש"
    },
    
    CI_OnlineResource: {
    	caption: "כן_Online Resource______ש",
    	linkage: "כן_URL__ש",
    	protocol: "כן_Protocol___ש",
    	applicationProfile: "כן_Application Profile_______ש",
    	name: "כן_Name__ש",
    	description: "כן_Description____ש",
    	sFunction: "כן_Function___ש"
    },
    
    CI_ResponsibleParty: {
    	caption: "כן_Point of Contact______ש",
    	individualName: "כן_Individual Name______ש",
    	organisationName: "כן_Organisation Name______ש",
    	positionName: "כן_Position Name_____ש",
    	contactInfo: "כן_Contact Info_____ש",
    	role: "כן_Role__ש"
    },
    
    CI_RoleCode: {
    	caption: "כן_Role__ש",
    	resourceProvider: "כן_Resource Provider______ש",
    	custodian: "כן_Custodian____ש",
    	owner: "כן_Owner___ש",
    	user: "כן_User__ש",
    	distributor: "כן_Distributor____ש",
    	originator: "כן_Originator____ש",
    	pointOfContact: "כן_Point of Contact______ש",
    	principalInvestigator: "כן_Principal Investigator________ש",
    	processor: "כן_Processor____ש",
    	publisher: "כן_Publisher____ש",
    	author: "כן_Author___ש"
    },
    
    CI_Telephone: {
    	voice: "כן_Voice___ש",
    	facsimile: "כן_Fax__ש"
    },
    
    DCPList: {
    	caption: "כן_DCP__ש",
    	XML: "כן_XML__ש",
    	CORBA: "כן_CORBA___ש",
    	JAVA: "כן_JAVA__ש",
    	COM: "כן_COM__ש",
    	SQL: "כן_SQL__ש",
    	WebServices: "כן_WebServices____ש"
    },
    
    DQ_ConformanceResult: {
    	caption: "כן_Conformance Result______ש",
    	explanation: "כן_Explanation____ש",
    	degree: {
    		caption: "כן_Degree___ש",
    		validationPerformed: "כן_Validation Performed_______ש",
    		conformant: "כן_Conformant____ש",
    		nonConformant: "כן_Non Conformant_____ש"
    	}
    },
    
    DQ_DataQuality: {
    	report: "כן_Report___ש"
    },
    
    DQ_Scope : {
    	level: "כן_Scope (quality information applies to)____________ש",
    	levelDescription: "כן_Level Description______ש"
    },
    
    EX_Extent: {
    	caption: "כן_Extent___ש",
    	description: "כן_Description____ש",
    	geographicElement: "כן_Spatial Extent_____ש",
    	temporalElement: "כן_Temporal Extent______ש",
    	verticalElement: "כן_Vertical Extent______ש"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "כן_West Bounding Longitude________ש",
    	eastBoundLongitude: "כן_East Bounding Longitude________ש",
    	southBoundLatitude: "כן_South Bounding Latitude________ש",
    	northBoundLatitude: "כן_North Bounding Latitude________ש"
    },
    
    EX_GeographicDescription: {
    	caption: "כן_Geographic Description________ש"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "כן_Begin Date____ש",
    		endPosition: "כן_End Date___ש"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "כן_Minimum Value_____ש",
    	maximumValue: "כן_Maximum Value_____ש",
    	verticalCRS: "כן_Vertical CRS_____ש"
    },
    
    Length: {
    	caption: "כן_Length___ש",
    	uom: "כן_Units of Measure______ש",
    	km: "כן_Kilometers____ש",
    	m: "כן_Meters___ש",
    	mi: "כן_Miles___ש",
    	ft: "כן_Feet__ש"
    },
    
    LI_Lineage: {
    	statement: "כן_Lineage Statement______ש"
    },
    
    MD_BrowseGraphic: {
    	fileName: "כן_Browse Graphic URL______ש",
    	fileDescription: "כן_Browse Graphic Caption________ש",
    	fileType: "כן_Browse Graphic Type_______ש"
    },
    
    MD_ClassificationCode: {
    	unclassified: "כן_Unclassified_____ש",
    	restricted: "כן_Restricted____ש",
    	confidential: "כן_Confidential_____ש",
    	secret: "כן_Secret___ש",
    	topSecret: "כן_Top Secret____ש"
    },
    
    MD_Constraints: {
    	caption: "כן_Usage Constraints______ש",
    	useLimitation: "כן_Use Limitation_____ש"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "כן_Spatial Representation Type_________ש",
    	spatialResolution: "כן_Spatial Resolution______ש",
    	language: "כן_Resource Language______ש",
    	supplementalInformation: "כן_Supplemental_____ש"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "כן_Online___ש"
    },
    
    MD_Distribution: {
    	distributionFormat: "כן_Distribution Format_______ש",
    	transferOptions: "כן_Transfer Options______ש"
    },
    
    MD_Format: {
    	name: "כן_Format Name____ש",
    	version: "כן_Format Version_____ש"
    },
    
    MD_Identifier: {
    	caption: "כן_URI__ש",
    	identifierCaption: "כן_Identifier____ש",
    	code: "כן_Code__ש"
    },
    
    MD_Keywords: {
    	delimitedCaption: "כן_Keywords___ש",
    	thesaurusName: "כן_Associated Thesaurus_______ש"
    },
    
    MD_KeywordTypeCode: {
    	caption: "כן_Keyword Type_____ש",
    	discipline: "כן_Discipline____ש",
    	place: "כן_Place___ש",
    	stratum: "כן_Stratum___ש",
    	temporal: "כן_Temporal___ש",
    	theme: "כן_Theme___ש"
    },
    
    MD_LegalConstraints: {
    	caption: "כן_Legal Constraints______ש",
    	accessConstraints: "כן_Access Constraints______ש",
    	useConstraints: "כן_Use Constraints______ש",
    	otherConstraints: "כן_Other Constraints______ש"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "כן_Frequency____ש",
    	continual: "כן_Continual____ש",
    	daily: "כן_Daily___ש",
    	weekly: "כן_Weekly___ש",
    	fortnightly: "כן_Fortnightly____ש",
    	monthly: "כן_Monthly___ש",
    	quarterly: "כן_Quarterly____ש",
    	biannually: "כן_Biannually____ש",
    	annually: "כן_Annually___ש",
    	asNeeded: "כן_As Needed____ש",
    	irregular: "כן_Irregular____ש",
    	notPlanned: "כן_Not Planned____ש",
    	unknown: "כן_Unknown___ש"
    },
    
    MD_Metadata: {
    	caption: "כן_Metadata___ש",
    	fileIdentifier: "כן_File Identifier______ש",
    	language: "כן_Metadata Language______ש",
    	hierarchyLevel: "כן_Hierarchy Level______ש",
    	hierarchyLevelName: "כן_Hierarchy Level Name_______ש",
    	contact: "כן_Metadata Contact______ש",
    	dateStamp: "כן_Metadata Date_____ש",
    	metadataStandardName: "כן_Metadata Standard Name________ש",
    	metadataStandardVersion: "כן_Metadata Standard Version_________ש",
    	referenceSystemInfo: "כן_Reference System______ש",
    	identificationInfo: "כן_Identification_____ש",
    	distributionInfo: "כן_Distribution_____ש",
    	dataQualityInfo: "כן_Quality___ש"
    },
    
    MD_ProgressCode: {
    	caption: "כן_Progress Code_____ש",
    	completed: "כן_Completed____ש",
    	historicalArchive: "כן_Historical Archive______ש",
    	obsolete: "כן_Obsolete___ש",
    	onGoing: "כן_On Going___ש",
    	planned: "כן_Planned___ש",
    	required: "כן_Required___ש",
    	underDevelopment: "כן_Under Development______ש"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "כן_Denominator____ש"
    },
    
    MD_Resolution: {
    	equivalentScale: "כן_Equivalent Scale______ש",
    	distance: "כן_Distance___ש"
    },
    
    MD_RestrictionCode: {
    	copyright: "כן_Copyright____ש",
    	patent: "כן_Patent___ש",
    	patentPending: "כן_Patent Pending_____ש",
    	trademark: "כן_Trademark____ש",
    	license: "כן_License___ש",
    	intellectualPropertyRights: "כן_Intellectual Property Rights_________ש",
    	restricted: "כן_Restricted____ש",
    	otherRestrictions: "כן_Other Restrictions______ש"
    },
    
    MD_ScopeCode: {
    	attribute: "כן_Attribute____ש",
    	attributeType: "כן_Attribute type_____ש",
    	collectionHardware: "כן_Collection hardware_______ש",
    	collectionSession: "כן_Collection session______ש",
    	dataset: "כן_Dataset___ש",
    	series: "כן_Series___ש",
    	nonGeographicDataset: "כן_Non geographic dataset________ש",
    	dimensionGroup: "כן_Dimension group______ש",
    	feature: "כן_Feature___ש",
    	featureType: "כן_Feature type_____ש",
    	propertyType: "כן_Property type_____ש",
    	fieldSession: "כן_Field session_____ש",
    	software: "כן_Software___ש",
    	service: "כן_Service___ש",
    	model: "כן_Model___ש",
    	tile: "כן_Tile__ש"
    },
    
    MD_ScopeDescription: {
    	attributes: "כן_Attributes____ש",
    	features: "כן_Features___ש",
    	featureInstances: "כן_Feature Instances______ש",
    	attributeInstances: "כן_Attribute Instances_______ש",
    	dataset: "כן_Dataset___ש",
    	other: "כן_Other___ש"
    },
    
    MD_SecurityConstraints: {
    	caption: "כן_Security Constraints_______ש",
    	classification: "כן_Classification_____ש",
    	userNote: "כן_User Note____ש",
    	classificationSystem: "כן_Classification System_______ש",
    	handlingDescription: "כן_Handling Description_______ש"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "כן_Spatial Representation Type_________ש",
    	vector: "כן_Vector___ש",
    	grid: "כן_Grid__ש",
    	textTable: "כן_Text Table____ש",
    	tin: "כן_TIN__ש",
    	stereoModel: "כן_Stereo Model_____ש",
    	video: "כן_Video___ש"
    },
    
    MD_TopicCategoryCode: {
    	caption: "כן_Topic Category_____ש",
    	boundaries: "כן_Administrative and Political Boundaries_____________ש",
    	farming: "כן_Agriculture and Farming________ש",
    	climatologyMeteorologyAtmosphere: "כן_Atmosphere and Climatic________ש",
    	biota: "כן_Biology and Ecology_______ש",
    	economy: "כן_Business and Economic_______ש",
    	planningCadastre: "כן_Cadastral____ש",
    	society: "כן_Cultural, Society and Demography___________ש",
    	elevation: "כן_Elevation and Derived Products__________ש",
    	environment: "כן_Environment and Conservation_________ש",
    	structure: "כן_Facilities and Structures_________ש",
    	geoscientificInformation: "כן_Geological and Geophysical_________ש",
    	health: "כן_Human Health and Disease________ש",
    	imageryBaseMapsEarthCover: "כן_Imagery and Base Maps_______ש",
    	inlandWaters: "כן_Inland Water Resources________ש",
    	location: "כן_Locations and Geodetic Networks__________ש",
    	intelligenceMilitary: "כן_Military___ש",
    	oceans: "כן_Oceans and Estuaries_______ש",
    	transportation: "כן_Transportation Networks________ש",
    	utilitiesCommunication: "כן_Utilities and Communication_________ש"
    },
    
    MI_ContextCode: {
    	caption: "כן_Context___ש",
    	acquisition: "כן_Acquisition____ש",
    	pass: "כן_Pass__ש",
    	wayPoint: "כן_Waypoint___ש"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "כן_Environmental Conditions________ש",
    	averageAirTemperature: "כן_Average Air Temperature________ש",
    	maxRelativeHumidity: "כן_Maximum Relative Humidity_________ש",
    	maxAltitude: "כן_Maximum Altitude______ש",
    	meterologicalConditions: "כן_Meterological Conditions________ש"
    },
    
    MI_Event: {
    	identifier: "כן_Event Identifier______ש",
    	time: "כן_Time__ש",
    	expectedObjectiveReference: "כן_Expected Objective (Objective Identifer)_____________ש",
    	relatedSensorReference: "כן_Related Sensor (Instrument Identifer)____________ש",
    	relatedPassReference: "כן_Related Pass (Platform Pass Identifer)____________ש"
    },

    MI_GeometryTypeCode: {
    	point: "כן_Point___ש",
    	linear: "כן_Linear___ש",
    	areal: "כן_Areal___ש",
    	strip: "כן_Strip___ש"
    },
    
    MI_Instrument: {
    	citation: "כן_Instrument Citation_______ש",
    	identifier: "כן_Instrument Identifier_______ש",
    	sType: "כן_Instrument Type______ש",
    	description: "כן_Instrument Description________ש",
    	mountedOn: "כן_Mounted On____ש",
    	mountedOnPlatformReference: "כן_Mounted On (Platform Identifier)___________ש"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "כן_Acquisition____ש"
    },
    
    MI_Objective: {
    	caption: "כן_Objective____ש",
    	identifier: "כן_Objective Identifier_______ש",
    	priority: "כן_Priority of Target______ש",
    	sFunction: "כן_Function of Objective_______ש",
    	extent: "כן_Extent___ש",
    	pass: "כן_Platform Pass_____ש",
    	sensingInstrumentReference: "כן_Sensing Instrument (Instrument Identifier)______________ש",
    	objectiveOccurrence: "כן_Events___ש",
    	sections: {
    		identification: "כן_Identification_____ש",
    		extent: "כן_Extent___ש",
    		pass: "כן_Pass__ש",
    		sensingInstrument: "כן_Sensing Instrument______ש",
    		objectiveOccurrence: "כן_Events___ש"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "כן_Type (Collection Technique for Objective)_____________ש",
    	instantaneousCollection: "כן_Instantaneous Collection________ש",
    	persistentView: "כן_Persistent View______ש",
    	survey: "כן_Survey___ש"
    },
    
    MI_Operation: {
    	caption: "כן_Operation____ש",
    	description: "כן_Operation Description_______ש",
    	citation: "כן_Operation Citation______ש",
    	identifier: "כן_Operation Identifier_______ש",
    	status: "כן_Operation Status______ש",
    	objectiveReference: "כן_Related Objective (Objective Identifier)_____________ש",
    	planReference: "כן_Related Plan (Plan Identifier)__________ש",
    	significantEventReference: "כן_Related Event (Event Identifier)___________ש",
    	platformReference: "כן_Related Platform (Platform Identifier)____________ש",
    	sections: {
    		identification: "כן_Identification_____ש",
    		related: "כן_Related___ש"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "כן_Operation Type_____ש",
    	real: "כן_Real__ש",
    	simulated: "כן_Simulated____ש",
    	synthesized: "כן_Synthesized____ש"
    },
    
    MI_Plan: {
    	sType: "כן_Sampling Geometry for Collecting Data____________ש",
    	status: "כן_Status of Plan_____ש",
    	citation: "כן_Citation of Authority Requesting Collection______________ש",
    	satisfiedRequirementReference: "כן_Satisfied Requirement (Requirement Identifier)_______________ש",
    	operationReference: "כן_Related Operation (Operation Identifier)_____________ש"
    },
    
    MI_Platform: {
    	citation: "כן_Platform Citation______ש",
    	identifier: "כן_Platform Identifier_______ש",
    	description: "כן_Description of Platform Supporting the Instrument________________ש",
    	sponsor: "כן_Sponsor Organization for Platform___________ש",
    	instrument: "כן_Instrument(s) mounted on the platform____________ש",
    	instrumentReference: "כן_Instrument Identifier_______ש",
    	sections: {
    		identification: "כן_Identification_____ש",
    		sponsor: "כן_Sponsor___ש",
    		instruments: "כן_Instruments____ש"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "כן_Platform Pass Identifier________ש",
    	extent: "כן_Platform Pass Extent_______ש",
    	relatedEventReference: "כן_Related Event (Event Identifer)__________ש"
    },

    MI_PriorityCode: {
    	critical: "כן_Critical___ש", 
    	highImportance: "כן_High Importance______ש",
    	mediumImportance: "כן_Medium Importance______ש",
    	lowImportance: "כן_Low Importance_____ש"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "כן_Requested Date Of Collection_________ש",
    	latestAcceptableDate: "כן_Latest Acceptable Date________ש"
    },
    
    MI_Requirement: {
    	caption: "כן_Requirement____ש",
    	citation: "כן_Citation for Requirement Guidance Material______________ש",
    	identifier: "כן_Requirement Identifier________ש",
    	requestor: "כן_Requestor of Requirement________ש",
    	recipient: "כן_Recipient of Requirement Results___________ש",
    	priority: "כן_Requirement Priority_______ש",
    	requestedDate: "כן_Requested Date_____ש",
    	expiryDate: "כן_Expiry Date____ש",
    	satisifiedPlanReference: "כן_Satisfied Plan (Plan Identifier)___________ש",
    	sections: {
    		identification: "כן_Identification_____ש",
    		requestor: "כן_Requestor____ש",
    		recipient: "כן_Recipient____ש",
    		priorityAndDates: "כן_Priority And Dates______ש",
    		satisifiedPlan: "כן_Satisified  Plan______ש"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "כן_Sequence___ש",
    	start: "כן_Start___ש",
    	end: "כן_End__ש",
    	instantaneous: "כן_Instantaneous_____ש"
    },
    
    MI_TriggerCode: {
    	caption: "כן_Trigger___ש",
    	automatic: "כן_Automatic____ש",
    	manual: "כן_Manual___ש",
    	preProgrammed: "כן_Preprogrammed_____ש"
    },
    
    ObjectReference: {
    	uuidref: "כן_UUID Reference_____ש",
    	xlinkref: "כן_URL Reference_____ש"
    },
    
    RS_Identifier: {
    	caption: "כן_ID Plus Code Space______ש",
    	code: "כן_Code__ש",
    	codeSpace: "כן_Code Space____ש"
    },
    
    SV_CouplingType: {
    	loose: "כן_Loose___ש",
    	mixed: "כן_Mixed___ש",
    	tight: "כן_Tight___ש"
    },
    
    SV_OperationMetadata: {
    	operationName: "כן_Operation Name_____ש",
    	DCP: "כן_DCP__ש",
    	connectPoint: "כן_Connect Point_____ש"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "כן_ServiceType____ש",
    	couplingType: "כן_Coupling Type_____ש",
    	containsOperations: "כן_Operation Metadata______ש",
    	operatesOn: "כן_Operates On____ש"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "כן_Indeterminate Position________ש",
    	indeterminates: {
    		before: "כן_Before___ש",
       	after: "כן_After___ש",
      	now: "כן_Now__ש",
      	unknown: "כן_Unknown___ש"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "כן_GEMET Concept Keyword_______ש",
    		tool: "כן_Look Up____ש...",
    		dialogTitle: "כן_GEMET - Concept Keyword________ש",
    		searchLabel: "כן_Search___ש:",
    		searchTip: "כן_Search GEMET_____ש"
    	},
    	theme: {
    		tool: "כן_Look Up____ש...",
    		dialogTitle: "כן_GEMET - Inspire Data Theme_________ש"
    	},
    	ioerror: "כן_There was an error communicating with the GEMET service: {url}____________________ש",
    	searching: "כן_Searching GEMET______ש...",
    	noMatch: "כן_No matching results were found__________ש.",
      languages: {
      	"bg": "כן_Bulgarian____ש",
      	"cs": "כן_Czech___ש",
      	"da": "כן_Danish___ש",
      	"nl": "כן_Dutch___ש",
      	"en": "כן_English___ש",
      	"et": "כן_Estonian___ש",
      	"fi": "כן_Finnish___ש",
      	"fr": "כן_French___ש",
      	"de": "כן_German___ש",
      	"el": "כן_Greek___ש",
      	"hu": "כן_Hungarian____ש",
      	"ga": "כן_Gaelic (Irish)_____ש",
      	"it": "כן_Italian___ש",
      	"lv": "כן_Latvian___ש",
      	"lt": "כן_Lithuanian____ש",
      	"mt": "כן_Maltese___ש",
      	"pl": "כן_Polish___ש", 
      	"pt": "כן_Portuguese____ש",
      	"ro": "כן_Romanian___ש",
      	"sk": "כן_Slovak___ש",
      	"sl": "כן_Slovenian____ש",  	
      	"es": "כן_Spanish___ש",
      	"sv": "כן_Swedish___ש"
      }
    }
   
  })
);
