define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "Ĳ_FGDC__ä",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "Ĳ_None__ä",
    	notComplete: "Ĳ_Not complete_____ä",
    	other: "Ĳ_Other___ä",
    	present: "Ĳ_Present___ä",
    	unknown: "Ĳ_Unknown___ä",
    	unpublishedMaterial: "Ĳ_Unpublished material_______ä"
    },
    
    hints: {
    	integerGreaterThanOne: "Ĳ_(enter an integer > 1)________ä",
    	integer0To100: "Ĳ_(enter an integer 0..100)_________ä"
    },
    
    citeinfo: {
    	caption: "Ĳ_Citation Information_______ä",
    	origin: "Ĳ_Originator____ä",
    	pubdate: "Ĳ_Publication Date______ä",
    	pubtime: "Ĳ_Publication Time______ä",
    	title: "Ĳ_Title___ä",
    	edition: "Ĳ_Edition___ä",
    	geoform: {
    		caption: "Ĳ_Geospatial Data Presentation Form___________ä",
    		atlas: "Ĳ_Atlas___ä",
    		audio: "Ĳ_Audio___ä",
    		diagram: "Ĳ_Diagram___ä",
    		sDocument: "Ĳ_Document___ä",
    		globe: "Ĳ_Globe___ä",
    		map: "Ĳ_Map__ä",
    		model: "Ĳ_Model___ä",
    		multiMediaPresentation: "Ĳ_Multimedia presentation________ä",
    		profile: "Ĳ_Profile___ä",
    		rasterDigitalData: "Ĳ_Raster digital data_______ä",
    		remoteSensingImage: "Ĳ_Remote-sensing image_______ä",
    		section: "Ĳ_Section___ä",
    		spreadsheet: "Ĳ_Spreadsheet____ä",
    		tabularDigitalData: "Ĳ_Tabular digital data_______ä",
    		vectorDigitalData: "Ĳ_Vector digital data_______ä",
    		video: "Ĳ_Video___ä",
    		view: "Ĳ_View__ä"
    	},
    	serinfo: {
    		caption: "Ĳ_Series Information______ä",
    		sername: "Ĳ_Series Name____ä",
    		issue: "Ĳ_Issue Identification_______ä"
    	},
    	pubinfo: {
    		caption: "Ĳ_Publication Information________ä",
    		pubplace: "Ĳ_Publication Place______ä",
    		publish: "Ĳ_Publisher____ä"
    	},
    	othercit: "Ĳ_Other Citation Details________ä",
    	onlink: "Ĳ_Online Linkage (URL)_______ä"
    },
    
    cntinfo: {
    	caption: "Ĳ_Contact Information_______ä",
    	section: {
    		primary: "Ĳ_Primary___ä",
    		phoneAndEmail: "Ĳ_Phone and E-Mail______ä",
    		hoursAndInstructions: "Ĳ_Hours and Instructions________ä"
    	},
    	cntorgp: {
    		caption: "Ĳ_By organization______ä",
    		cntorg: "Ĳ_Organization_____ä",
    		cntper: "Ĳ_Person___ä"
    	},
    	cntperp: {
    		caption: "Ĳ_By person____ä",
    		cntper: "Ĳ_Person___ä",
    		cntorg: "Ĳ_Organization_____ä"
    	},
    	cntpos: "Ĳ_Position___ä",
    	cntaddr: {
    		caption: "Ĳ_Address___ä",
    		addrtype: {
    			caption: "Ĳ_Address Type_____ä",
    			mailing: "Ĳ_Mailing___ä",
    			physical: "Ĳ_Physical___ä",
    			mailingAndPhysical: "Ĳ_Mailing and Physical_______ä"
    		},
    		address: "Ĳ_Address___ä",
    		city: "Ĳ_City__ä",
    		state: "Ĳ_State___ä",
    		postal: "Ĳ_Postal Code____ä",
    		country: "Ĳ_Country___ä"
    	},
    	cntvoice: "Ĳ_Voice___ä",
    	cnttdd: "Ĳ_TDD/TTY Telephone (hearing impaired)____________ä",
    	cntfax: "Ĳ_Fax__ä",
    	cntemail: "Ĳ_E-Mail Address_____ä",
    	hours: "Ĳ_Hours___ä",
    	cntinst: "Ĳ_Instructions_____ä"
    },
    
    dataqual: {
    	caption: "Ĳ_Data Quality Information________ä",
    	section: {
    		attributeAccuracy: "Ĳ_Attribute Accuracy______ä",
    		logicalConsistency: "Ĳ_Logical Consistency_______ä",
    		completeness: "Ĳ_Completeness_____ä",
    		positionalAccuracy: "Ĳ_Positional Accuracy_______ä",
    		lineage: "Ĳ_Lineage___ä",
    		cloudCover: "Ĳ_Cloud Cover____ä"
    	},
    	attracc: {
    		caption: "Ĳ_Attribute Accuracy______ä",
    		attraccr: "Ĳ_Attribute Accuracy Report_________ä",
    		qattracc: {
    			caption: "Ĳ_Quantitative Attribute Accuracy Assessment______________ä",
    			attraccv: "Ĳ_Attribute Accuracy Value________ä",
    			attracce: "Ĳ_Attribute Accuracy Explanation__________ä"
    		}
    	},
    	logic: "Ĳ_Logical Consistency Report_________ä",
    	complete: "Ĳ_Completeness Report_______ä",
    	posacc: "Ĳ_Positional Accuracy_______ä",
    	horizpa: {
    		caption: "Ĳ_Horizontal Positional Accuracy__________ä",
    		horizpar: "Ĳ_Horizontal Positional Accuracy Report____________ä",
    		qhorizpa: {
    			caption: "Ĳ_Quantitative Horizontal Positional Accuracy Assessment_________________ä",
    			horizpav: "Ĳ_Horizontal Positional Accuracy Value____________ä",
    			horizpae: "Ĳ_Horizontal Positional Accuracy Explanation______________ä"
    		}
    	},
    	vertacc: {
    		caption: "Ĳ_Vertical Positional Accuracy_________ä",
    		vertaccr: "Ĳ_Vertical Positional Accuracy Report____________ä",
    		qvertpa: {
    			caption: "Ĳ_Quantitative Vertical Positional Accuracy Assessment_________________ä",
    			vertaccv: "Ĳ_Vertical Positional Accuracy Value___________ä",
    			vertacce: "Ĳ_Vertical Positional Accuracy Explanation_____________ä"
    		}
    	},
    	lineage: {
    		caption: "Ĳ_Lineage___ä"
    	},
    	srcinfo: {
    		caption: "Ĳ_Source Information______ä",
    		srccite: "Ĳ_Source Citation______ä",
    		srcscale: "Ĳ_Source Scale Denominator________ä",
    		typesrc: {
    			caption: "Ĳ_Type of Source Media_______ä",
    			paper: "Ĳ_Paper___ä",
    			stableBaseMaterial: "Ĳ_Stable-base material_______ä",
    			microfiche: "Ĳ_Microfiche____ä",
    			microfilm: "Ĳ_Microfilm____ä",
    			audiocassette: "Ĳ_Audio cassette_____ä",
    			chart: "Ĳ_Chart___ä",
    			filmstrip: "Ĳ_Film strip____ä",
    			transparency: "Ĳ_Transparency_____ä",
    			videocassette: "Ĳ_Video cassette_____ä",
    			videodisc: "Ĳ_Video disc____ä",
    			videotape: "Ĳ_Video tape____ä",
    			physicalModel: "Ĳ_Physical model_____ä",
    			computerProgram: "Ĳ_Computer program______ä",
    			disc: "Ĳ_Disc__ä",
    			cartridgeTape: "Ĳ_Cartridge tape_____ä",
    			magneticTape: "Ĳ_Magnetic tape_____ä",
    			online: "Ĳ_Online___ä",
    			cdrom: "Ĳ_CD-ROM___ä",
    			electronicBulletinBoard: "Ĳ_Electronic bulletin board_________ä",
    			electronicMailSystem: "Ĳ_Electronic mail system________ä"
    		},
    		srctime: "Ĳ_Source Time Period of Content__________ä",
    		srccurr: "Ĳ_Source Currentness Reference_________ä",
    		srccitea: "Ĳ_Source Citation Abbreviation_________ä",
    		srccontr: "Ĳ_Source Contribution_______ä"
    	},
    	procstep: {
    		caption: "Ĳ_Process Step_____ä",
    		procdesc: "Ĳ_Process Description_______ä",
    		srcused: "Ĳ_Source Used Citation Abbreviation___________ä",
    		procdate: "Ĳ_Process Date_____ä",
    		proctime: "Ĳ_Process Time_____ä",
    		srcprod: "Ĳ_Source Produced Citation Abbreviation____________ä",
    		proccont: "Ĳ_Process Contact______ä"
    	},
    	cloud: "Ĳ_Cloud Cover____ä"
    },
    
    distinfo: {
    	caption: "Ĳ_Distribution Information________ä",
    	section: {
    		distributor: "Ĳ_Distributor____ä",
    		description: "Ĳ_Description____ä",
    		orderProcess: "Ĳ_Order Process_____ä",
    		prerequisites: "Ĳ_Prerequisites_____ä",
    		availability: "Ĳ_Availability_____ä"
    	},
    	distrib: "Ĳ_Distributor____ä",
    	resdesc: {
    		caption: "Ĳ_Resource Description_______ä",
    		liveData: "Ĳ_Live Data and Maps______ä",
    		downloadableData: "Ĳ_Downloadable Data______ä",
    		offlineData: "Ĳ_Offline Data_____ä",
    		staticMapImages: "Ĳ_Static Map Images______ä",
    		sDocument: "Ĳ_Other Documents______ä",
    		application: "Ĳ_Applications_____ä",
    		geographicService: "Ĳ_Geographic Services_______ä",
    		clearingHouse: "Ĳ_Clearinghouses_____ä",
    		mapFiles: "Ĳ_Map Files____ä",
    		geographicActivies: "Ĳ_Geographic Activities_______ä"
    	},
    	distliab: "Ĳ_Distribution Liability Statement___________ä",
    	custom: "Ĳ_Custom Order Process_______ä",
    	techpreq: "Ĳ_Technical Prerequisites________ä",
    	availabl: "Ĳ_Availability_____ä"
    },
    
    eainfo: {
    	caption: "Ĳ_Entity and Attribute Information___________ä",
    	overview: "Ĳ_Overview Description_______ä",
    	eaover: "Ĳ_Entity and Attribute Overview__________ä",
    	eadetcit: "Ĳ_Entity and Attribute Detail Citation____________ä"
    },
    
    idinfo: {
    	caption: "Ĳ_Identification Information_________ä",
    	section: {
    		timeAndStatus: "Ĳ_Time and Status______ä",
    		constraints: "Ĳ_Constraints____ä",
    		contact: "Ĳ_Contact___ä",
    		additional: "Ĳ_Additional____ä"
    	},
    	citeinfo: "Ĳ_Citation___ä",
    	descript: {
    		caption: "Ĳ_Description____ä",
    		sAbstract: "Ĳ_Abstract___ä",
    		purpose: "Ĳ_Purpose___ä",
    		supplinf: "Ĳ_Supplemental Information________ä"
    	},
    	timeperd: {
    		caption: "Ĳ_Time Period of Content________ä",
    		current: {
    			caption: "Ĳ_Currentness Reference_______ä",
    			groundCondition: "Ĳ_Ground Condition______ä",
    			publicationDate: "Ĳ_Publication Date______ä"
    		}
    	},
    	status: {
    		caption: "Ĳ_Status___ä",
    		progress: {
    			caption: "Ĳ_Progress___ä",
     			complete: "Ĳ_Complete___ä",
    			inWork: "Ĳ_In work___ä",
    			planned: "Ĳ_Planned___ä"
    		},
    		update: {
    			caption: "Ĳ_Maintenance and Update Frequency___________ä",
    			continual: "Ĳ_Continual____ä",
    			daily: "Ĳ_Daily___ä",
    			weekly: "Ĳ_Weekly___ä",
    			monthly: "Ĳ_Monthly___ä",
    			annually: "Ĳ_Annually___ä",
    			unknown: "Ĳ_Unknown___ä",
    			asNeeded: "Ĳ_As needed____ä",
    			irregular: "Ĳ_Irregular____ä",
    			nonePlanned: "Ĳ_None planned_____ä"
    		}
    	},
    	spdom: {
    		caption: "Ĳ_Extent___ä",
    		bounding: {
    			caption: "Ĳ_Bounding Coordinates_______ä",
    			westbc: "Ĳ_West Bounding Longitude________ä",
    			eastbc: "Ĳ_East Bounding Longitude________ä",
    			northbc: "Ĳ_North Bounding Latitude________ä",
    			southbc: "Ĳ_South Bounding Latitude________ä"
    		}
    	},
      keywords: {
        caption: "Trefwoorden",
        theme: "Thema",
        place: "Plaats",
        stratum: "Stratum",
        temporal: "Tijdelijk",
        thesaursus: "Bijbehorende thesaurus",
        delimited: "Trefwoorden",
        themektIsoTopicCategory: "ISO onderwerp ...",
        themektIsoTopicDialog: "ISO onderwerp",
        placektGnis: "Geografische namen Informatiesysteem"
      },
      accconst: "Toegangsbeperkingen",
      useconst: "Gebruiksbeperkingen",
      ptcontac: "Aanspreekpunt voor de resource",
      browse: {
      	caption: "Ĳ_Browse Graphic_____ä",
      	browsen: "Ĳ_Browse Graphic URL______ä",
      	browsed: "Ĳ_Browse Graphic File Description__________ä",
      	browset: "Ĳ_Browse Graphic File Type________ä"
      },
      datacred: "Krediet dataset",
      secinfo: {
      	caption: "Ĳ_Security Information_______ä",
      	secsys: "Ĳ_Security Classification System__________ä",
      	secclass: {
      		caption: "Ĳ_Security Classification________ä",
      		topSecret: "Ĳ_Top secret____ä",
      		secret: "Ĳ_Secret___ä",
      		confidential: "Ĳ_Confidential_____ä",
      		restricted: "Ĳ_Restricted____ä",
      		unclassified: "Ĳ_Unclassified_____ä",
      		sensitive: "Ĳ_Sensitive____ä"
      	},
      	sechandl: "Ĳ_Security Handling Description__________ä"
      },
      sNative: "Native Data Set omgeving",
      crossref: "Kruisverwijzing"
    },
    
    metadata: {
    	idinfo: "Ĳ_Identification_____ä",
    	dataqual: "Ĳ_Quality___ä",
    	spdoinfo: "Ĳ_Spatial Data Organization_________ä",
    	spref: "Ĳ_Spatial Reference______ä",
    	eainfo: "Ĳ_Entity and Attribute_______ä",
    	distinfo: "Ĳ_Distribution_____ä",
    	metainfo: "Ĳ_Metadata___ä"
    },
    
    metainfo: {
    	caption: "Ĳ_Metadata Information_______ä",
    	section: {
    		dates: "Ĳ_Metadata Dates_____ä",
    		contact: "Ĳ_Metadata Contact______ä",
    		standard: "Ĳ_Metadata Standard______ä",
    		additional: "Ĳ_Additional____ä"
    	},
      metd: "Metadata-datum",
      metrd: "Metadata review datum",
      metfrd: "Metadata toekomstige reviewdatum",
      metstdn: "Metadata-standaardnaam",
      metstdv: "Metadata-standaardversie",
      metac: "Metadata-toegangsbeperkingen",
      metuc: "Metadata-gebruiksbeperkingen",
      metsi: {
      	caption: "Ĳ_Metadata Security Information__________ä",
      	metscs: "Ĳ_Metadata Security Classification System_____________ä",
      	metsc: "Ĳ_Metadata Security Classification___________ä",
      	metshd: "Ĳ_Metadata Security Handling Description____________ä"
      }
    },
    
    spref: {
    	caption: "Ĳ_Spatial Reference Information__________ä",
    	horizsys: {
    		caption: "Ĳ_Horizontal Coordinate System_________ä",
    		geograph: {
    			caption: "Ĳ_Geographic____ä",
    			latres: "Ĳ_Latitude Resolution_______ä",
    			longres: "Ĳ_Longitude Resolution_______ä",
    			geogunit: {
    				caption: "Ĳ_Geographic Coordinate Units_________ä",
    				decimalDegrees: "Ĳ_Decimal degrees______ä",
    				decimalMinutes: "Ĳ_Decimal minutes______ä",
    				decimalSeconds: "Ĳ_Decimal seconds______ä",
    				degreesAndDecimalMinutes: "Ĳ_Degrees and decimal minutes_________ä",
    				degreesMinutesAndDecimalSeconds: "Ĳ_Degrees, minutes, and decimal seconds____________ä",
    				radians: "Ĳ_Radians___ä",
    				grads: "Ĳ_Grads___ä"
    			}
    		},
    		planar: {
    			caption: "Ĳ_Planar___ä"
    		},
    		local: {
    			caption: "Ĳ_Local___ä",
    			localdes: "Ĳ_Local Description______ä",
    			localgeo: "Ĳ_Local Georeference Information__________ä"
    		},
    		geodetic: {
    			caption: "Ĳ_Geodetic Model_____ä",
    			horizdn: {
    				caption: "Ĳ_Horizontal Datum Name_______ä",
    				nad83: "Ĳ_North American Datum of 1983_________ä",
    				nad27: "Ĳ_North American Datum of 1927_________ä"
    			},
    			ellips: {
    				caption: "Ĳ_Ellipsoid Name_____ä",
    				grs80: "Ĳ_Geodetic Reference System 80_________ä",
    				clarke1866: "Ĳ_Clarke 1866____ä"
    			},
    			semiaxis: "Ĳ_Semi-major Axis______ä",
    			denflat: "Ĳ_Denominator of Flattening Ratio__________ä"
    		}
    	},
    	vertdef: {
    		caption: "Ĳ_Vertical Coordinate System_________ä",
    		altsys: {
    			caption: "Ĳ_Altitude System______ä",
    			altdatum: {
    				caption: "Ĳ_Altitude Datum Name_______ä",
    				navd88: "Ĳ_North American Vertical Datum of 1988____________ä",
    				ngvd29: "Ĳ_National Geodetic Vertical Datum of 1929_____________ä"
    			},
    			altres: "Ĳ_Altitude Resolution_______ä",
    			altunits: {
    				caption: "Ĳ_Altitude Distance Units________ä",
    				meters: "Ĳ_Meters___ä",
    				feet: "Ĳ_Feet__ä"
    			},
    			altenc: {
    				caption: "Ĳ_Altitude Encoding Method________ä",
    				explicit: "Ĳ_Explicit elevation coordinate included with horizontal coordinates_____________________ä",
    				implicit: "Ĳ_Implicit coordinate_______ä",
    				attribute: "Ĳ_Attribute values______ä"
    			}
    		},
    		depthsys: {
    			caption: "Ĳ_Depth System_____ä",
    			depthdn: {
    				caption: "Ĳ_Depth Datum Name______ä",
    				option1: "Ĳ_Local surface_____ä", 
    				option2: "Ĳ_Chart datum; datum for sounding reduction_____________ä", 
    				option3: "Ĳ_Lowest astronomical tide________ä", 
    				option4: "Ĳ_Highest astronomical tide_________ä", 
    				option5: "Ĳ_Mean low water_____ä", 
    				option6: "Ĳ_Mean high water______ä", 
    				option7: "Ĳ_Mean sea level_____ä", 
    				option8: "Ĳ_Land survey datum______ä", 
    				option9: "Ĳ_Mean low water springs________ä", 
    				option10: "Ĳ_Mean high water springs________ä", 
    				option11: "Ĳ_Mean low water neap_______ä", 
    				option12: "Ĳ_Mean high water neap_______ä", 
    				option13: "Ĳ_Mean lower low water_______ä", 
    				option14: "Ĳ_Mean lower low water springs_________ä", 
    				option15: "Ĳ_Mean higher high water________ä", 
    				option16: "Ĳ_Mean higher low water_______ä", 
    				option17: "Ĳ_Mean lower high water_______ä", 
    				option18: "Ĳ_Spring tide____ä", 
    				option19: "Ĳ_Tropic lower low water________ä", 
    				option20: "Ĳ_Neap tide____ä", 
    				option21: "Ĳ_High water____ä", 
    				option22: "Ĳ_Higher high water______ä", 
    				option23: "Ĳ_Low water____ä", 
    				option24: "Ĳ_Low-water datum______ä", 
    				option25: "Ĳ_Lowest low water______ä", 
    				option26: "Ĳ_Lower low water______ä", 
    				option27: "Ĳ_Lowest normal low water________ä", 
    				option28: "Ĳ_Mean tide level______ä", 
    				option29: "Ĳ_Indian spring low water________ä", 
    				option30: "Ĳ_High-water full and charge_________ä", 
    				option31: "Ĳ_Low-water full and charge_________ä", 
    				option32: "Ĳ_Columbia River datum_______ä", 
    				option33: "Ĳ_Gulf Coast low water datum_________ä", 
    				option34: "Ĳ_Equatorial springs low water_________ä", 
    				option35: "Ĳ_Approximate lowest astronomical tide____________ä", 
    				option36: "Ĳ_No correction_____ä"
    			},
    			depthres: "Ĳ_Depth Resolution______ä",
    			depthdu: {
    				caption: "Ĳ_Depth Distance Units_______ä",
    				meters: "Ĳ_Meters___ä",
    				feet: "Ĳ_Feet__ä"
    			},   			
    			depthem: {
    				caption: "Ĳ_Depth Encoding Method_______ä",
    				explicit: "Ĳ_Explicit depth coordinate included with horizontal coordinates____________________ä",
    				implicit: "Ĳ_Implicit coordinate_______ä",
    				attribute: "Ĳ_Attribute values______ä"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "Ĳ_Time Period Information________ä",
    	sngdate: "Ĳ_Single Date____ä",
    	mdattim: "Ĳ_Multiple Dates_____ä",
    	rngdates: "Ĳ_Date Range____ä",
    	caldate: "Ĳ_Date__ä",
    	time: "Ĳ_Time__ä",
    	begdate: "Ĳ_Beginning Date_____ä",
    	begtime: "Ĳ_Beginning Time_____ä",
    	enddate: "Ĳ_Ending Date____ä",
    	endtime: "Ĳ_Ending Time____ä"
    }
   
  })
);
